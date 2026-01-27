import weeabooifyIcon from "../assets/icons/weeabooify.svg";
import uwuifyIcon from "../assets/icons/uwuify.png";
import monetifyIcon from "../assets/icons/monetify.svg";
import kotlinIcon from "../assets/icons/kotlin.svg";
import javaIcon from "../assets/icons/java.svg";
import xmlIcon from "../assets/icons/xml.svg";
import androidIcon from "../assets/icons/android.svg";
import terminalIcon from "../assets/icons/terminal.svg";

const projects = [
  {
    name: "Weeabooify",
    description: "A beautiful and aesthetic theme engine for AOSP",
    icon: weeabooifyIcon,
    link: "https://github.com/KaeruShi/Weeabooify",
    technologies: [
      { name: "Kotlin", icon: kotlinIcon, class: "w-9" },
      { name: "Java", icon: javaIcon, class: "w-8" },
      { name: "XML", icon: xmlIcon, class: "w-12" },
      { name: "Terminal", icon: terminalIcon, class: "" },
      { name: "Android", icon: androidIcon, class: "w-11" },
    ],
  },
  {
    name: "Uwuify",
    description: "A theme engine for Android Q which can customize your boring stock UI",
    icon: uwuifyIcon,
    link: "https://github.com/KaeruShi/Uwuify",
    technologies: [
      { name: "Kotlin", icon: kotlinIcon, class: "w-9" },
      { name: "Java", icon: javaIcon, class: "w-8" },
      { name: "XML", icon: xmlIcon, class: "w-12" },
      { name: "Terminal", icon: terminalIcon, class: "" },
      { name: "Android", icon: androidIcon, class: "w-11" },
    ],
  },
  {
    name: "Monetify",
    description: "A theme engine which can customize third party app colors",
    icon: monetifyIcon,
    link: "https://github.com/KaeruShi/Monetify",
    technologies: [
      { name: "Kotlin", icon: kotlinIcon, class: "w-9" },
      { name: "Java", icon: javaIcon, class: "w-8" },
      { name: "XML", icon: xmlIcon, class: "w-12" },
      { name: "Terminal", icon: terminalIcon, class: "" },
      { name: "Android", icon: androidIcon, class: "w-11" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex scroll-mt-30 flex-col px-8 md:px-14 lg:px-30">
      <p className="mb-16 text-center text-4xl font-black lg:text-left lg:text-5xl">
        My Featured
        <br />
        Projects
      </p>
      <div className="flex flex-col gap-6 *:transition *:duration-300 *:hover:scale-105 lg:flex-row">
        {projects.map((project, index) => (
          <div
          onClick={() => window.open(project.link, "_blank")}
            key={index}
            className="bg-container border-con_outline p-6 rounded-container flex flex-1 flex-col
      border"
          >
            <img src={project.icon} alt={project.name} className="w-20" />
            <p className="mt-10 mb-2 text-3xl font-semibold">{project.name}</p>
            <p className="mb-4 flex-1 text-xl">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.technologies.map((tech, techIndex) => (
                <img
                  key={techIndex}
                  src={tech.icon}
                  alt={tech.name}
                  className={tech.class}
                  title={tech.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
