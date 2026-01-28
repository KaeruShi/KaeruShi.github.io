import { motion } from "framer-motion";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import WhatsappIcon from "@/assets/icons/whatsapp.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import TelegramIcon from "@/assets/icons/telegram.svg?react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="gap-4 md:gap-8 px-8 flex min-h-screen flex-col items-center justify-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className="text-4xl md:text-5xl font-semibold"
      >
        Get in
        <span className="text-accent"> Touch!</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className="text-xl md:text-2xl mb-5 md:mb-0 text-center"
      >
        I’m currently looking for a on-site job or any new opportunities.
        <br />
        Looking to discuss a project or just say hi? Feel free to message me
        anytime!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className="gap-5 *:w-15 *:bg-primary *:p-2 *:hover:-translate-y-2 *:lg:w-20 *:lg:p-4 flex *:cursor-pointer *:rounded-full *:transition *:duration-200"
      >
        <InstagramIcon
          onClick={() =>
            window.open("https://instagram.com/kaerushi_", "_blank")
          }
          className="fill-secondary h-auto"
        />
        <WhatsappIcon
          onClick={() => window.open("https://wa.me/62895369167497", "_blank")}
          className="fill-secondary h-auto"
        />
        <FacebookIcon
          onClick={() =>
            window.open("https://facebook.com/kaerushi404", "_blank")
          }
          className="fill-secondary h-auto"
        />
        <TelegramIcon
          onClick={() => window.open("https://t.me/kaerushi", "_blank")}
          className="fill-secondary h-auto"
        />
      </motion.div>
    </section>
  );
}
