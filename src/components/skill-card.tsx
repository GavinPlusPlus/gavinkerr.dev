/// skill-card.tsx
/// Defines a card with a space for an image, then subtitle.
/// My attempt at trying to copy the balatro idle card animation.
///
/// Author: Gavin Kerr
/// Date: Fri Feb 13 2026
/// Copyright 2023-2026 Gavin Kerr, All Rights Reserved.

import { throttle } from "@/lib/throttle";
import { useAnimationFrame } from "./animation-frame-provider";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SkillCardData } from "@/data/skills-data";

interface SkillCardProps {
  skill: SkillCardData;
  randStart?: boolean;
  xMax?: number;
  yMax?: number;
  className?: string;
}

export const SkillCard = ({
  skill,
  randStart = true,
  xMax = 10,
  yMax = 15,
  className,
}: SkillCardProps) => {
  const [idle, setIdle] = useState<boolean>(true);
  const [hovering, setHovering] = useState<boolean>(false);

  // Memoized random start to ensure each card instance gets unique values
  const initialRotation = useMemo(() => ({
    x: randStart ? Math.random() * xMax * 2 - xMax : 0,
    y: randStart ? Math.random() * yMax * 2 - yMax : 0,
  }), [randStart, xMax, yMax]);

  // Random time offset so cards don't all animate in sync
  const timeOffset = useMemo(() => Math.random() * 4000, []);

  const [rotate, setRotate] = useState<{ x: number; y: number }>(initialRotation);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const throttledMouseMove = useRef(
    throttle((e: React.PointerEvent<HTMLDivElement>) => {
      setIdle(false);
      const card = e.currentTarget as HTMLDivElement;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      setRotate({ x: rotateX, y: rotateY });
    }, 50),
  );

  // spotlight target/current refs (percent values for smooth cross-device rendering)
  const targetPos = useRef({ x: 50, y: 50 });
  const currentPos = useRef({ x: 50, y: 50 });

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    // update rotation (throttled) and spotlight target (unthrottled)
    throttledMouseMove.current?.(e);
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pctX = Math.min(100, Math.max(0, (x / rect.width) * 100));
    const pctY = Math.min(100, Math.max(0, (y / rect.height) * 100));
    targetPos.current.x = pctX;
    targetPos.current.y = pctY;
    // size based on skill.shine but clamped
    const spotSize = Math.max(32, Math.min((skill.shine || 1) * 64, 110));
    el.style.setProperty("--spot-size", `${spotSize}px`);
    setIdle(false);
    setHovering(true);
  }, [skill.shine]);

  const onPointerLeave = () => {
    setIdle(true);
    setHovering(false);
    // return spotlight to center target
    targetPos.current.x = 50;
    targetPos.current.y = 50;
  };

  const onPointerEnter = () => {
    setHovering(true);
    setIdle(false);
  };

  // Shared RAF loop to smoothly lerp currentPos -> targetPos (only when hovering for performance)
  useAnimationFrame(() => {
    if (!hovering) return;
    const el = containerRef.current;
    if (!el) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.18);
    currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.18);
    el.style.setProperty("--mxp", `${currentPos.current.x}%`);
    el.style.setProperty("--myp", `${currentPos.current.y}%`);
  }, [hovering]);

  // Touch handling for mobile (removed problematic scroll listener)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchMove = (ev: TouchEvent) => {
      if (!ev.touches || ev.touches.length === 0) return;
      const t = ev.touches[0];
      const rect = el.getBoundingClientRect();
      const x = t.clientX - rect.left;
      const y = t.clientY - rect.top;
      // Only update if touch is within card bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const pctX = Math.min(100, Math.max(0, (x / rect.width) * 100));
        const pctY = Math.min(100, Math.max(0, (y / rect.height) * 100));
        targetPos.current.x = pctX;
        targetPos.current.y = pctY;
        setIdle(false);
        setHovering(true);
      }
    };

    el.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  useEffect(() => {
    let idleTimeout: ReturnType<typeof setTimeout>;
    let animationFrame: number;
    let startTime: number;

    if (!idle) {
      idleTimeout = setTimeout(() => {
        setIdle(true);
      }, 3000); // 3 seconds of inactivity
    } else {
      // When idle, animate rotation in a circle with random time offset
      startTime = Date.now();
      const animateIdle = () => {
        const elapsed = Date.now() - startTime + timeOffset;
        const angle = (elapsed / 4000) * Math.PI * 2; // Full rotation every 4 seconds
        const x = Math.sin(angle) * xMax; // ±xMax degrees
        const y = Math.cos(angle) * yMax; // ±yMax degrees
        setRotate({ x, y });
        animationFrame = requestAnimationFrame(animateIdle);
      };
      animationFrame = requestAnimationFrame(animateIdle);
    }

    return () => {
      if (idleTimeout) {
        clearTimeout(idleTimeout);
      }
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [idle, xMax, yMax, timeOffset]);

  return (
    <div
      ref={containerRef}
      className={`skill-card bg-gray-100 dark:bg-gray-800 w-30 h-37.5 rounded-lg overflow-hidden border-2 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform  ${className} ${idle ? "is-idle" : "is-active"} ${hovering ? "is-hovering" : ""}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerEnter={onPointerEnter}
      style={{
        transform: `perspective(700px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}
    >
      <div className="skill-card__shine pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <div className="s r" />
        <div className="s g" />
        <div className="s b" />
      </div>

      <div className="skill-card__spot pointer-events-none absolute z-20" />

      <style>{`
        .skill-card{position:relative}
        .skill-card__shine .s{position:absolute;left:-50%;top:-50%;width:200%;height:200%;filter:blur(18px);mix-blend-mode:screen;opacity:0.06;transform:translateZ(0)}
        .skill-card__shine .r{background:linear-gradient(90deg, transparent 30%, rgba(255,80,80,0.9) 50%, transparent 70%);}
        .skill-card__shine .g{background:linear-gradient(90deg, transparent 30%, rgba(80,255,160,0.85) 50%, transparent 70%);}
        .skill-card__shine .b{background:linear-gradient(90deg, transparent 30%, rgba(120,160,255,0.9) 50%, transparent 70%);}

        @keyframes shimmer-rc {
          from{transform:translateX(-60%) translateY(-10%)}
          to{transform:translateX(60%) translateY(10%)}
        }
        @keyframes shimmer-gc {
          from{transform:translateX(-40%) translateY(10%)}
          to{transform:translateX(40%) translateY(-10%)}
        }
        @keyframes shimmer-bc {
          from{transform:translateX(-50%) translateY(0%)}
          to{transform:translateX(50%) translateY(0%)}
        }

        .skill-card__shine .r{animation:shimmer-rc 6s linear infinite}
        .skill-card__shine .g{animation:shimmer-gc 7.2s linear infinite}
        .skill-card__shine .b{animation:shimmer-bc 5.2s linear infinite}

        /* localized spotlight that follows the cursor */
        .skill-card__spot{width:var(--spot-size,220px);height:var(--spot-size,220px);left:var(--mxp,50%);top:var(--myp,50%);transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.15) 45%, transparent 70%);mix-blend-mode:screen;opacity:0;transition:opacity 220ms ease, transform 220ms ease;filter:blur(8px)}
        .skill-card.is-hovering .skill-card__spot{opacity:0.95}

        .skill-card.is-hovering .skill-card__shine .s{opacity:0.12;filter:blur(12px)}
        .skill-card.is-idle .skill-card__shine .s{opacity:0.06}
      `}</style>
      {/* Image section */}
      <div className="mx-2 h-2/3 bg-gray-200 dark:bg-gray-700 border dark:border-gray-600 m-2 px-2 py-2 rounded-md overflow-hidden">
        <img
          src={skill.imgUrl}
          alt={skill.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title section */}
      <div className="text-center font-medium text-gray-800 dark:text-gray-200 text-[clamp(0.65rem,2.5vw,0.875rem)] my-auto">
        {skill.title}
      </div>
    </div>
  );
};
