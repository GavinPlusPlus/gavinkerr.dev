/// skills-data.ts
/// Defines the skills data for the skill cards
///
/// Author: Gavin Kerr
/// Date: Fri Feb 14 2026
/// Copyright 2023-2026 Gavin Kerr, All Rights Reserved.

import avalonia from "@/assets/Avalonia_logo.svg";

export interface SkillCardData {
  imgUrl: string;
  title: string;
  shine: number;
}

export const skillsData: SkillCardData[] = [
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
    shine: 1.0,
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: "TypeScript",
    shine: 1.2,
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    title: "C#",
    shine: 0.9,
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    title: ".NET",
    shine: 0.8,
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg",
    title: "EntityFramework",
    shine: 1.1,
  },
  {
    imgUrl: avalonia,
    title: "Avalonia UI",
    shine: 0.9,
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Python",
    shine: 0.7,
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    title: "Docker",
    shine: 0.9,
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "Git",
    shine: 0.6,
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    title: "PostgreSQL",
    shine: 0.8,
  },
  {
    imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    title: "Tailwind CSS",
    shine: 1.0,
  },
];