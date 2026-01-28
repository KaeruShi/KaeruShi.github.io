import type { FC } from "react";
import type { projects } from "@/constants/projects";

type Props = {
  project: (typeof projects)[number];
};

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => window.open(project.link, "_blank")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") window.open(project.link, "_blank");
      }}
      className="bg-container border-con_outline rounded-container flex flex-1 cursor-pointer flex-col border p-6"
    >
      <img src={project.icon} alt={project.name} className="w-20" />

      <p className="mt-10 mb-2 text-3xl font-semibold">{project.name}</p>
      <p className="mb-4 flex-1 text-xl">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <img
            key={tech.name}
            src={tech.icon}
            alt={tech.name}
            title={tech.name}
            className={tech.class ?? ""}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;