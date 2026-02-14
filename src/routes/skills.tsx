import { SkillCard } from "@/components/skill-card";
import { AnimationFrameProvider } from "@/components/animation-frame-provider";
import { skillsData } from "@/data/skills-data";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AnimationFrameProvider>
      <div className="transition-all animate-fade-in">
        <div className="flex flex-col">
          <div className="w-full">
            <h1 className="text-4xl font-bold">Skills</h1>
          </div>

          <div className="flex flew-row gap-4 mx-auto mt-4 flex-wrap justify-center">
            {skillsData.map((skill, index) => (
              <SkillCard key={`${skill.title}-${index}`} skill={skill} />
            ))}
          </div>
      </div>
    </div>
    </AnimationFrameProvider>
  );
}
