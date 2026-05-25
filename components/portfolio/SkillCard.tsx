import type { Skill } from "./data";
import { InteractiveSkillCardShell } from "./InteractiveSkillCardShell";

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;
  const floatDelay = `${(skill.name.length % 6) * 0.35}s`;
  const content = (
    <>
      <div className="flex items-center justify-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange/10 text-orange transition duration-300 group-hover:bg-orange group-hover:text-white">
          <Icon size={18} />
        </span>
        <h2 className="font-semibold text-navy">{skill.name}</h2>
      </div>
      <p className="mt-2 text-xs leading-5 text-muted transition duration-300 group-hover:text-navy/75">{skill.description}</p>
    </>
  );

  const selectedContent = (
    <>
      <div className="flex items-center justify-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange text-white">
          <Icon size={18} />
        </span>
        <h2 className="font-semibold text-navy">{skill.name}</h2>
      </div>
      <p className="mt-2 text-xs leading-5 text-navy/70">{skill.description}</p>
    </>
  );

  return (
    <InteractiveSkillCardShell floatDelay={floatDelay} selectedContent={selectedContent} variant="warm" wide={skill.wide}>
      {content}
    </InteractiveSkillCardShell>
  );
}
