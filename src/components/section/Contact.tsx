import { motion } from "framer-motion";
import InstagramIcon from "@/assets/icons/instagram.svg?react";
import WhatsappIcon from "@/assets/icons/whatsapp.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import TelegramIcon from "@/assets/icons/telegram.svg?react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-8 md:gap-8"
    >
      <motion.p
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // Optional: ensures the animation only happens once
        viewport={{ once: false }}
        className="text-4xl font-semibold md:text-5xl"
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
        className="mb-5 text-center text-xl md:mb-0 md:text-2xl"
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
        className="flex gap-5 *:w-15 *:cursor-pointer *:rounded-full *:bg-primary *:p-2 *:transition *:duration-200 *:hover:-translate-y-2 *:lg:w-20 *:lg:p-4"
      >
        <InstagramIcon
          onClick={() =>
            window.open("https://instagram.com/kaerushi_", "_blank")
          }
          className="h-auto fill-secondary"
        />
        <WhatsappIcon
          onClick={() => window.open("https://wa.me/62895369167497", "_blank")}
          className="h-auto fill-secondary"
        />
        <FacebookIcon
          onClick={() =>
            window.open("https://facebook.com/kaerushi404", "_blank")
          }
          className="h-auto fill-secondary"
        />
        <TelegramIcon
          onClick={() => window.open("https://t.me/kaerushi", "_blank")}
          className="h-auto fill-secondary"
        />
      </motion.div>
    </section>
  );
}
