import { motion } from "framer-motion";

type HeadingProps = {
  heading: string;
  rotate: number;
  right?: boolean;
};
export default function HeadingClient({
  heading,
  rotate,
  right,
}: HeadingProps) {
  return (
    <motion.div
      initial={{ width: "0%", opacity: 0, scale: 0.8 }}
      whileInView={{ width: "140%", opacity: 1, scale: 1, rotate }}
      transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`cross-dots h-16 lg:h-20 z-20 top-28 -left-24 pl-40 py-4 md:py-3 lg:py-4 `}
    >
      <motion.h1
        initial={{ x: right ? -300 : 400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", mass: 0.9 }}
        viewport={{ once: true }}
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${right ? "text-right" : "text-left"
          } font-misto text-black whitespace-nowrap pr-[35vw] lg:pr-[40vw]`}
      >
        {heading}
      </motion.h1>
    </motion.div>
  );
}
