export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full flex-col justify-center px-[6%] lg:px-[12%]"
    >
      <h2 className="pt-5 text-5xl font-black lg:text-7xl">
        Hello, I'm
        <br />
        <span className="text-accent">Dzikri Farrel Ardiansyah</span>
      </h2>
      <p className="pt-3 text-[1.2rem] lg:mt-5 lg:mb-6 lg:text-2xl text-gray-300 lg:w-[60%]">
        I'm a passionate developer with experience in android & web development,
        always eager to learn new technologies and improve my skills.
      </p>
      <div
        className="*:hover:bg-accent flex gap-3 pt-5 *:rounded-full *:border *:px-3.5 *:py-2.5
            *:transition *:duration-300 *:lg:text-xl *:lg:px-5 *:lg:py-5 *:hover:text-black *:active:scale-95"
      >
        <button
          onClick={() => (window.location.href = "#projects")}
          className="bg-white font-semibold text-black hover:scale-105"
        >
          View Projects
        </button>
        <button
          onClick={() =>
            window.open("mailto:farel.ardiansyah404@gmail.com", "_blank")
          }
          className="text-white hover:scale-110"
        >
          Hire Me
        </button>
      </div>
    </section>
  );
}
