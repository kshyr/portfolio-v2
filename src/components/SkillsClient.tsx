import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";

type SkillItem = {
  name: string;
  src: string;
};

const skills: SkillItem[] = [
  {
    name: "JavaScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "TypeScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/480px-Typescript.svg.png",
  },
  {
    name: "React",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    name: "Tailwind CSS",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
  },
];

export default function SkillsClient() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  return (
    <>
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
      </motion.div>

      <motion.div className="w-full text-white text-lg z-50 relative top-64 h-[calc(100vh-24rem)] p-24 place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {skills.map((item, i) => {
          const x = useSpring(0.5, { stiffness: 10000, damping: 500 });
          const y = useSpring(0.5, { stiffness: 10000, damping: 500 });
          const rotateX = useTransform(y, [0, 1], [12, -12]);
          const rotateY = useTransform(x, [0, 1], [-12, 12]);

          const diagonalMovement = useTransform<number, number>(
            [rotateX, rotateY],
            ([newRotateX, newRotateY]) => {
              const position: number = newRotateX + newRotateY;
              return position;
            }
          );

          const diagonal2Movement = useTransform<number, number>(
            [rotateX, rotateY],
            ([newRotateX, newRotateY]) => {
              const position: number = newRotateX - newRotateY;
              return position;
            }
          );

          const sheenPosition = useTransform(
            diagonalMovement,
            [-50, 50],
            [200, -100]
          );

          const sheenPosition2 = useTransform(
            diagonal2Movement,
            [-50, 50],
            [200, -100]
          );

          const sheenOpacity = useTransform(
            sheenPosition,
            [-100, 50, 200],
            [0.2, 0.1, 0.2]
          );

          const sheenOpacity2 = useTransform(
            sheenPosition2,
            [-100, 50, 200],
            [0.3, 0, 0.3]
          );
          const sheenGradient = useMotionTemplate`linear-gradient(55deg, transparent, 
            rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%, transparent),linear-gradient(-35deg, transparent, 
            rgba(255 255 255 / ${sheenOpacity2}) ${sheenPosition2}%, transparent)`;

          function onHover(e: MouseEvent) {
            const bounds = e.currentTarget.getBoundingClientRect();

            const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;
            const yValue =
              (e.clientY - bounds.y) / e.currentTarget.clientHeight;
            x.set(xValue, true);
            y.set(yValue, true);
          }

          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * i + 0.5 }}
              viewport={{ once: true }}
              style={{ x, y, rotateX, rotateY, backgroundImage: sheenGradient }}
              onPointerMove={onHover}
              onHoverEnd={() => {
                x.set(0.5);
                y.set(0.5);
              }}
              className="flex flex-col justify-center items-center h-72 w-52 border p-8 rounded-2xl bg-black shadow-md gap-4"
            >
              <img
                src={item.src}
                className="w-24 aspect-auto pointer-events-none"
              />
              <h2 className="font-agra font-semibold">{item.name}</h2>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        style={{ y }}
        className="polka polka-skills z-20"
      ></motion.div>
    </>
  );
}
