/// name-card-v2.tsx
/// Balatro style game card with profile pic, face, and role
///
/// Author: Gavin Kerr
/// Date: Fri Feb 13 2026
/// Copyright 2023-2026 Gavin Kerr, All Rights Reserved.

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { throttle } from "@/lib/throttle";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback, useRef } from "react";

interface NameCardV2Props {
  className?: string;
}


export const NameCardV2 = ({ className }: NameCardV2Props) => {
  const [idle, setIdle] = useState<boolean>(true);
  const [rotate, setRotate] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const onMouseLeave = () => {
    setIdle(true);
    setRotate({ x: 0, y: 0 });
  };

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
    }, 50),
  );

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    throttledMouseMove.current?.(e);
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
      // When idle, animate rotation in a circle
      startTime = Date.now();
      const animateIdle = () => {
        const elapsed = Date.now() - startTime;
        const angle = (elapsed / 4000) * Math.PI * 2; // Full rotation every 4 seconds
        const x = Math.sin(angle) * 5; // ±5 degrees
        const y = Math.cos(angle) * 7; // ±5 degrees
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
  }, [idle]);

  return (
    <Card
      className={cn(
        "w-full shadow-2xl mt-3 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform  px-3 py-4 sm:px-4 sm:py-5 md:p-6",
        className,
      )}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(2500px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 transition-all duration-300 ease-in-out">
        <Avatar className="flex-shrink-0 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] transition-all duration-300 ease-in-out">
          <AvatarImage
            src="https://gravatar.com/avatar/832764445dc859a8f99cf1a626c0c099fe3b142dfdb3a69ab3b37a7232e3809d?s=512"
            alt="Gavin Kerr"
            className="transition-opacity duration-300 ease-in-out aspect-square"
          />
          <AvatarFallback>
            <Skeleton className="rounded-full w-full h-full"></Skeleton>
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col text-center md:text-left transition-all duration-300 ease-in-out">
          <div className="text-2xl sm:text-3xl md:text-5xl font-bold transition-all duration-300 ease-in-out">Gavin Kerr</div>
          <div className="text-base md:text-lg lg:text-2xl mt-1 sm:mt-2 transition-all duration-300 ease-in-out">
            SWE and Integrations @ Lindell Yachts
          </div>
        </div>
      </div>
    </Card>
  );
};
