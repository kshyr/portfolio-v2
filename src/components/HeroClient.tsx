import { motion, useScroll, useTransform } from "framer-motion";
import Pic from "./Pic";

export default function HeroClient() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "240%"]);

  return (
    <>
      <div className="flex flex-col-reverse gap-8 sm:gap-12 md:flex-row justify-between items-center w-full relative z-20">
        <motion.div style={{ y: y2 }} className="flex flex-col">
          <h1 className="font-misto text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <motion.span
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-block"
            >
              Hello
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="inline"
            >
              , <br /> I'm Kostiantyn
            </motion.span>
          </h1>
          <div className="flex w-full justify-between">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="font-misto"
            >
              ###
            </motion.h3>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="font-agra text-xl"
            >
              Frontend Developer
            </motion.h3>
          </div>
          <div className="flex w-full justify-between">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="font-agra text-lg"
            >
              based in New Jersey
            </motion.h3>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="font-misto"
            >
              ///
            </motion.h3>
          </div>
        </motion.div>
        <Pic />
      </div>
      <motion.div style={{ y }} className="polka z-10"></motion.div>
    </>
  );
}
