/// skills-carousel.tsx
/// Horizontally scrolling carousel of skill cards with auto-scroll
///
/// Author: Gavin Kerr
/// Date: Fri Feb 14 2026
/// Copyright 2023-2026 Gavin Kerr, All Rights Reserved.

import { useEffect, useRef } from "react";
import { SkillCard } from "./skill-card";
import { skillsData } from "@/data/skills-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const SkillsCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let animationId: number;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused && container) {
        scrollPosition += 0.35; // Pixels per frame

        // Reset when we've scrolled past the first set
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }

        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleMouseEnter);
    container.addEventListener("touchend", handleMouseLeave);

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleMouseEnter);
      container.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  // Duplicate the skills array for seamless looping
  const duplicatedSkills = [...skillsData, ...skillsData];

  return (
    <Card className="w-full overflow-hidden py-4">
      <CardHeader>
        <CardTitle className="text-2xl">Skills</CardTitle>
        <CardDescription>
            A showcase of the technologies and tools I have experience with. 
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-hidden scrollbar-hide"
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div key={`${skill.title}-${index}`} className="shrink-0">
              <SkillCard skill={skill} randStart={true} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
