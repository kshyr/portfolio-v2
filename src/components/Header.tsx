import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
    } else if (scrollY.get() > 200 && scrollY.get() > scrollY.getPrevious()) {
      setHidden(true);
    }
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <motion.header
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2 }}
      className="flex fixed top-0 left-0 w-full justify-between px-8 sm:px-16 py-8 font-agra text-base sm:text-xl font-bold items-center z-50 mix-blend-difference"
    >
      <img src="/assets/logo.svg" className="h-12 sm:h-16" />
      <ul className="h-full flex gap-4 sm:gap-12 md:gap-16 justify-between items-center z-40">
        <li>
          <a href="/about">{"resume>"}</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="/blog">contact</a>
        </li>
      </ul>
    </motion.header>
  );
}
