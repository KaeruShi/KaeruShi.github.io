import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full flex-col justify-center px-[6%] lg:px-[12%]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className="pt-5 text-5xl font-black text-primary md:text-7xl"
      >
        Hello, I'm
        <br />
        <span className="text-accent">Dzikri Farrel Ardiansyah</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className=":mb-6 pt-3 text-[1.2rem] text-primary/60 md:text-2xl lg:mt-5 lg:w-[60%]"
      >
        I'm a passionate developer with experience in android & web development,
        always eager to learn new technologies and improve my skills.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className="flex gap-3 pt-5 *:rounded-full *:border *:px-3.5 *:py-2.5 *:transition *:duration-300 *:hover:bg-accent *:hover:text-black *:active:scale-95 *:md:px-6 *:md:py-4.5 *:md:text-xl"
      >
        <button
          onClick={() => (window.location.href = "#projects")}
          className="bg-primary font-semibold text-secondary hover:scale-105"
        >
          View Projects
        </button>
        <button
          onClick={() =>
            window.open("mailto:farel.ardiansyah404@gmail.com", "_blank")
          }
          className="text-primary hover:scale-110"
        >
          Hire Me
        </button>
      </motion.div>
    </section>
  );
}
