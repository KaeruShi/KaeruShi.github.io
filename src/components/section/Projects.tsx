import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex scroll-mt-30 flex-col px-8 md:px-14 lg:px-30"
    >
      <motion.p
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className="mb-16 text-center text-4xl font-black lg:text-left lg:text-5xl"
      >
        My Featured
        <br />
        Projects
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className="flex flex-col gap-6 *:transition *:duration-300 *:hover:scale-105 lg:flex-row"
      >
        {projects.map((item) => (
          <ProjectCard project={item} />
        ))}
      </motion.div>
    </section>
  );
}
