import { SkillCard } from "@/components/skill-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="transition-all animate-fade-in">
      <div className="flex flex-col">
        <div className="w-full">
          <h1 className="text-4xl font-bold">Skills</h1>
        </div>

        <div className="flex flew-row gap-4">
          <SkillCard
            skill={{
              imgUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              title: "React",
              shine: 0.8,
            }}
          />
          <SkillCard
            skill={{
              imgUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              title: "React",
              shine: 0.8,
            }}
          />
          <SkillCard
            skill={{
              imgUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              title: "React",
              shine: 0.8,
            }}
          />
          <SkillCard
            skill={{
              imgUrl:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              title: "React",
              shine: 0.8,
            }}
          />
        </div>
      </div>
    </div>
  );
}
