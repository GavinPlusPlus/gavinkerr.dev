/// skill-card.tsx
/// Defines a card with a space for an image, then subtitle.
/// My attempt at trying to copy the balatro idle card animation.
///
/// Author: Gavin Kerr
/// Date: Fri Feb 13 2026
/// Copyright 2023-2026 Gavin Kerr, All Rights Reserved.

import { throttle } from "@/lib/throttle";
import { useCallback, useEffect, useRef, useState } from "react";

interface SkillCardData {
  imgUrl: string;
  title: string;
  shine: number;
}

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
  yMax = 10,
  className,
}: SkillCardProps) => {
  const [idle, setIdle] = useState<boolean>(true);

  const [rotate, setRotate] = useState<{ x: number; y: number }>({
    x: randStart ? Math.random() * xMax * 2 - xMax : 0, // Random between -xMax and xMax
    y: randStart ? Math.random() * yMax * 2 - yMax : 0, // Random between -yMax and yMax
  });

  const [lastRotate, setLastRotate] = useState<{ x: number; y: number }>({
    x: randStart ? Math.random() * xMax * 2 - xMax : 0, // Random between -xMax and xMax
    y: randStart ? Math.random() * yMax * 2 - yMax : 0, // Random between -yMax and yMax
  });

  const throttledMouseMove = useRef(
    throttle((e: React.MouseEvent<HTMLDivElement>) => {
      setIdle(false);
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      setRotate({ x: rotateX, y: rotateY });
      setLastRotate({ x: rotateX, y: rotateY });
    }, 50),
  );

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    throttledMouseMove.current?.(e);
  }, []);

  const onMouseLeave = () => {
    setIdle(true);
    setRotate(lastRotate);
  }

  useEffect(() => {
    let idleTimeout: ReturnType<typeof setTimeout>;
    let animationFrame: number;
    let startTime: number;

    if (!idle) {
      idleTimeout = setTimeout(() => {
        setIdle(true);
      }, 3000); // 3 seconds of inactivity
    } else {
      // When idle, animate rotation in a circle
      startTime = Date.now();
      const animateIdle = () => {
        const elapsed = Date.now() - startTime;
        const angle = (elapsed / 4000) * Math.PI * 2; // Full rotation every 4 seconds
        const x = Math.sin(angle) * xMax; // ±xMax degrees
        const y = Math.cos(angle) * yMax; // ±yMax degrees
        setRotate({ x, y });
        setLastRotate({ x, y });
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
  }, [idle, xMax, yMax]);

  return (
    <div
      className={`bg-white w-30 h-37.5 rounded-lg overflow-hidden border-2 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform  ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(700px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}
    ></div>
  );
};
