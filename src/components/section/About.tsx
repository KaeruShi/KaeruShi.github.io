// prettier-ignore
import { MyIcons } from "../icons/MyIcons";
import { interest, skills, languages, edu, workExperience } from "@/constants/about";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mb-40 flex w-full scroll-mt-15 flex-col items-center justify-center lg:scroll-mt-30"
    >
      <motion.h2
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className="mb-8 self-center text-4xl font-black"
      >
        About Me
      </motion.h2>
      <div className="flex w-full md:w-min lg:w-min px-4 lg:px-0 flex-col gap-6">
        <div id="box-a" className="flex lg:flex-row items-center flex-col h-fit lg:w-min gap-6">
          {/* <!-- avatar --> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            // Optional: ensures the animation only happens once
            viewport={{ once: false }}
            className="h-auto lg:w-[320px] w-[256px] shrink-0"
          >
            <img
              className="rounded-container size-full object-cover"
              src="./avatar.png"
              alt="Avatar"
            />
          </motion.div>

          {/* <!-- right --> */}
          <div className="flex flex-col gap-6">
            {/* <!-- bio --> */}
            <motion.p
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              // Optional: ensures the animation only happens once
              viewport={{ once: false }}
              className="bg-container rounded-container border-con_outline flex flex-1 items-center
                  justify-center border p-5 lg:p-6 text-xl lg:text-2xl"
            >
              I am an individual with a passion for technology and design. I have experience in
              administration and IT support, accustomed to working with data, systems, and visuals.
              I am highly motivated to learn, responsible, and able to work both independently and
              in a team.
            </motion.p>

            {/* <!-- interest --> */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // Optional: ensures the animation only happens once
              viewport={{ once: false }}
              className="bg-container rounded-container border-con_outline hidden md:flex lg:flex
                  w-fit items-center border py-4 pr-4"
            >
              <p className="pl-6 text-2xl">Interest</p>
              <div className="bg-con_outline mx-6 h-10 w-0.5"></div>
              <ul
                className="*:border-con_outline flex gap-4 *:flex *:items-center *:gap-2 *:rounded-2xl
                    *:border *:bg-container-secondary *:px-4 *:py-3 *:pr-10 *:transition *:duration-300
                    *:hover:scale-105 *:hover:cursor-pointer *:hover:bg-[#4000]"
              >
                {interest.map((item) => (
                  <li key={item.name} className="flex items-center gap-2">
                    <img src={item.icon} alt={item.name} className="h-6 w-6" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        <div id="box-b" className="flex flex-col lg:flex-row gap-6">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // Optional: ensures the animation only happens once
            viewport={{ once: false }}
            className="bg-container border-con_outline rounded-container h-fit flex-1 border p-6"
          >
            <p className="lg:text-3xl text-[1.7rem] font-bold">Skills</p>
            <div className="bg-con_outline mt-5.5 h-px w-full"></div>
            {Object.entries(skills).map(([category, skillSet]) => (
              <div key={category} className="mt-5">
                <ul>
                  {skillSet.map((skill, index) => (
                    <li key={index} className="flex flex-col gap-4">
                      <div className="flex md:gap-5 gap-3 flex-wrap mt-3">
                        {skill.icons.map((icon, idx) => (
                          <img
                            key={idx}
                            src={icon}
                            alt={`Skill Icon ${idx + 1}`}
                            className={`${icon === MyIcons.xml ? "hidden md:flex" : ""} md:h-15 md:w-15 h-13 w-13 bg-[#121212] rounded-full p-2.5`}
                          />
                        ))}
                      </div>
                      <p className="text-[1rem] md:text-[1.125rem]">{skill.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* <!-- right column --> */}
          <div className="flex lg:w-[42%] flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // Optional: ensures the animation only happens once
              viewport={{ once: false }}
              className="bg-container border-con_outline rounded-container flex h-full flex-col border
                  p-6"
            >
              <p className="text-[1.7rem] lg:text-3xl font-bold">Language</p>
              <div className="bg-con_outline lg:mt-5.5 mt-5 mb-6 h-px w-full"></div>
              <ul className="flex gap-5 lg:gap-0 lg:flex-1 flex-col justify-between lg:p-1">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-center gap-5">
                    <img src={lang.icon} alt={lang.name} className="w-10" />
                    <div className="h-4 w-full rounded-full bg-[#4eff7d3a]">
                      <div
                        className="bg-accent h-full rounded-full"
                        style={{ width: lang.level }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // Optional: ensures the animation only happens once
              viewport={{ once: false }}
              className="bg-container border-con_outline rounded-container border p-6"
            >
              <ul className="flex flex-col gap-6">
                {edu.map((item) => (
                  <li key={item.school} className="flex items-center justify-between">
                    <div>
                      <p className="md:text-2xl text-xl font-black">{item.school}</p>
                      <p className="md:text-xl text-gray-400">{item.grade}</p>
                    </div>
                    <p
                      className="
                      font-semibold border-con_outline rounded-2xl md:rounded-container md:px-5
                      md:py-4 px-3 py-2.5 md:text-2xl border bg-container-secondary
                    "
                    >
                      {item.year}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // Optional: ensures the animation only happens once
          viewport={{ once: false }}
          id="box-c"
        >
          <div className="bg-container border-con_outline rounded-container flex flex-col border p-6">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between">
              <div>
                <p className="md:text-3xl text-xl font-bold">{workExperience.company}</p>
                <p className="md:text-xl text-gray-400">{workExperience.subtitle}</p>
              </div>
              <p
                className="
                  font-semibold border-con_outline rounded-2xl md:rounded-container lg:px-5
                  md:py-4 px-3 py-3 md:text-2xl border w-fit self-center mt-4 md:mt-0 lg:mt-0 bg-container-secondary
                "
              >
                {workExperience.period}
              </p>
            </div>
            <div className="bg-con_outline mt-5.5 mb-6 h-px w-full"></div>
            <div className="flex flex-col gap-6">
              {workExperience.roles.map((role) => (
                <div key={role.title}>
                  <p className="md:text-2xl text-xl font-bold mb-3">{role.title}</p>
                  <ul className="flex flex-col gap-3">
                    {role.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-[1rem] md:text-[1.125rem]"
                        dangerouslySetInnerHTML={{ __html: MyIcons.checkmarkIcon + resp }}
                      ></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
