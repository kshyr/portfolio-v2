import { motion } from "framer-motion";

export default function SkillsClient() {
  return (
    <motion.div
      initial={{ width: "0%", opacity: 0, scale: 0.8 }}
      whileInView={{ width: "140%", opacity: 1, scale: 1, rotate: -12 }}
      transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="cross-dots h-24 -rotate-12 z-50 -left-16 top-48 px-16 sm:px-24 py-7 sm:py-5"
    >
      <motion.h1
        initial={{ x: 400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", mass: 0.9 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-misto z-50 text-black whitespace-nowrap"
      >
        {"<-My Skills->"}
      </motion.h1>
      <motion.div></motion.div>
    </motion.div>
  );
}
