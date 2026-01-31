// prettier-ignore
import { MyIcons } from "../icons/MyIcons";
import {
  interest,
  skills,
  languages,
  edu,
  workExperience,
} from "@/constants/about";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mb-40 flex w-full scroll-mt-30 flex-col items-center
        justify-center lg:scroll-mt-30">
      <motion.h2
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className="mb-8 self-center text-4xl font-black">
        About Me
      </motion.h2>
      <div className="flex w-full flex-col gap-6 px-4 md:w-min lg:w-min lg:px-0">
        <div
          id="box-a"
          className="flex h-fit flex-col items-center gap-6 lg:w-min lg:flex-row
            lg:items-stretch">
          {/* <!-- avatar --> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            // Optional: ensures the animation only happens once
            viewport={{ once: false }}
            className="w-[256px] shrink-0 lg:w-[320px]">
            <img
              className="h-full w-full rounded-container object-cover"
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
              className="flex flex-1 items-center justify-center
                rounded-container border border-con_outline bg-container p-5
                text-[1.175rem] lg:p-6 lg:text-2xl">
              I am an individual with a passion for technology and design. I
              have experience in administration and IT support, accustomed to
              working with data, systems, and visuals. I am highly motivated to
              learn, responsible, and able to work both independently and in a
              team.
            </motion.p>

            {/* <!-- interest --> */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // Optional: ensures the animation only happens once
              viewport={{ once: false }}
              className="hidden w-fit items-center rounded-container border
                border-con_outline bg-container py-4 pr-4 md:flex lg:flex">
              <p className="pl-6 md:text-2xl lg:text-[1.7rem]">Interest</p>
              <div className="mx-6 h-10 w-0.5 bg-con_outline"></div>
              <ul
                className="flex gap-4 *:flex *:items-center *:gap-2
                  *:rounded-2xl *:border *:border-con_outline
                  *:bg-container-secondary *:px-4 *:py-3 *:pr-10 *:transition
                  *:duration-300 *:hover:scale-105 *:hover:cursor-pointer
                  *:hover:bg-[#4000]">
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
        <div id="box-b" className="flex flex-col gap-6 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // Optional: ensures the animation only happens once
            viewport={{ once: false }}
            className="h-fit flex-1 rounded-container border border-con_outline
              bg-container p-6">
            <p className="text-[1.7rem] font-bold lg:text-3xl">Skills</p>
            <div className="mt-5.5 h-px w-full bg-con_outline"></div>
            {Object.entries(skills).map(([category, skillSet]) => (
              <div key={category} className="mt-5">
                <ul>
                  {skillSet.map((skill, index) => (
                    <li key={index} className="flex flex-col gap-4">
                      <div className="mt-3 flex flex-wrap gap-3 md:gap-5">
                        {skill.icons.map((icon, idx) => (
                          <img
                            key={idx}
                            src={icon}
                            alt={`Skill Icon ${idx + 1}`}
                            className={`${icon === MyIcons.xml ? "hidden md:flex" : ""}
                            h-13 w-13 rounded-full bg-[#121212] p-2.5 md:h-15
                            md:w-15`}
                          />
                        ))}
                      </div>
                      <p className="text-[1.175rem] md:text-[1.rem]">
                        {skill.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* <!-- right column --> */}
          <div className="flex flex-col gap-6 lg:w-[42%]">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // Optional: ensures the animation only happens once
              viewport={{ once: false }}
              className="flex h-full flex-col rounded-container border
                border-con_outline bg-container p-6">
              <p className="text-[1.7rem] font-bold lg:text-3xl">Language</p>
              <div className="mt-5 mb-6 h-px w-full bg-con_outline lg:mt-5.5"></div>
              <ul
                className="flex flex-col justify-between gap-5 lg:flex-1
                  lg:gap-0 lg:p-1">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-center gap-5">
                    <img src={lang.icon} alt={lang.name} className="w-10" />
                    <div className="h-4 w-full rounded-full bg-[#4eff7d3a]">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: lang.level }}></div>
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
              className="rounded-container border border-con_outline
                bg-container p-6">
              <ul className="flex flex-col gap-8">
                {edu.map((item) => (
                  <li
                    key={item.school}
                    className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-black md:text-2xl">
                        {item.school}
                      </p>
                      <p className="text-primary/50 md:text-xl">{item.grade}</p>
                    </div>
                    <p
                      className="rounded-2xl border border-con_outline
                        bg-container-secondary px-3 py-2.5 font-semibold
                        md:rounded-container md:px-5 md:py-4 md:text-2xl">
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
          id="box-c">
          <div
            className="flex flex-col rounded-container border border-con_outline
              bg-container p-6">
            <div
              className="flex flex-col justify-between md:flex-row lg:flex-row">
              <div>
                <p className="text-xl font-bold md:text-3xl">
                  {workExperience.company}
                </p>
                <p className="text-primary/50 md:text-xl">
                  {workExperience.subtitle}
                </p>
              </div>
              <p
                className="mt-4 w-fit self-center rounded-2xl border
                  border-con_outline bg-container-secondary px-3 py-3
                  font-semibold md:mt-0 md:rounded-container md:py-4 md:text-2xl
                  lg:mt-0 lg:px-5">
                {workExperience.period}
              </p>
            </div>
            <div className="mt-5.5 mb-6 h-px w-full bg-con_outline"></div>
            <div className="flex flex-col gap-6">
              {workExperience.roles.map((role) => (
                <div key={role.title}>
                  <p className="mb-3 text-xl font-bold md:text-2xl">
                    {role.title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {role.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-[1rem]
                          md:text-[1.175rem]"
                        dangerouslySetInnerHTML={{
                          __html: MyIcons.checkmarkIcon + resp,
                        }}></li>
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
