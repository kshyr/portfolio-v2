import { motion, useScroll, useTransform } from "framer-motion";

export default function PaperBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  return <motion.div style={{ y }} className="paper z-[5]"></motion.div>;
}
