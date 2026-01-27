export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center gap-4 md:gap-8 px-8"
    >
      <p className="text-4xl md:text-5xl font-semibold">
        Get in
        <span className="text-accent"> Touch!</span>
      </p>
      <p className="text-center text-xl mb-5 md:mb-0">
        I’m currently looking for a on-site job or any new opportunities.
        <br />
        Looking to discuss a project or just say hi? Feel free to message me
        anytime!
      </p>
      <div
        className="flex gap-5 *:w-15 *:cursor-pointer *:rounded-full *:bg-white *:p-2 *:transition
            *:duration-200 *:hover:-translate-y-2 *:lg:w-20 *:lg:p-4"
      >
        <img
          onClick={() =>
            window.open("https://instagram.com/kaerushi_", "_blank")
          }
          src="src/assets/icons/instagram.svg"
          alt="Instagram"
        />
        <img
          onClick={() => window.open("https://wa.me/62895369167497", "_blank")}
          src="src/assets/icons/whatsapp.svg"
          alt="Instagram"
        />
        <img
          onClick={() =>
            window.open("https://facebook.com/kaerushi404", "_blank")
          }
          src="src/assets/icons/facebook.svg"
          alt="Instagram"
        />
        <img
          onClick={() => window.open("https://t.me/kaerushi", "_blank")}
          src="src/assets/icons/telegram.svg"
          alt="Instagram"
        />
      </div>
    </section>
  );
}
