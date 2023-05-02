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
import HeadingClient from "./HeadingClient";

type SkillItem = {
  name: string;
  src: string;
  scale?: number;
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
    name: "Next.js",
    src: "https://media.crystallize.com/crystallize_marketing/23/1/14/6/next_js_logo.svg",
    scale: 1.3,
  },
  {
    name: "Tailwind CSS",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "GraphQL",
    src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/graphql-icon.png",
  },
  {
    name: "Amazon Web Services",
    src: "https://d24wuq6o951i2g.cloudfront.net/img/events/id/458/458075889/assets/e0c433d04beed0b0c26a469ac4c45f25.AWS-Logo-halfwhite.png",
  },
  {
    name: "Framer Motion",
    src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  },
];

export default function SkillsClient() {
  return (
    <>
      <HeadingClient heading={"<-My skills->"} rotate={-5} />

      <motion.div className="w-full text-white text-lg z-20 relative top-96 px-8 lg:px-52 xl:px-80 py-4 place-items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
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
              style={{
                x,
                y,
                rotateX,
                rotateY,
                backgroundImage: sheenGradient,
              }}
              onPointerMove={onHover}
              onHoverEnd={() => {
                x.set(0.5);
                y.set(0.5);
              }}
              className="flex flex-col justify-center items-center h-48 w-32 sm:h-52 sm:w-40 border p-8 rounded-2xl bg-black shadow-md gap-4"
            >
              <motion.img
                style={{
                  x: useTransform(x, [0, 1], [-19, 20]),
                  y: useTransform(y, [0, 1], [-19, 20]),
                  scale: item.scale ?? 1.0,
                  filter: useMotionTemplate`drop-shadow(${useTransform(
                    x,
                    [0, 1],
                    [10, -9]
                  )}px ${useTransform(
                    y,
                    [0, 1],
                    [10, -9]
                  )}px 2px rgba(0,0,0,0.4))`,
                  rotateX: useTransform(rotateX, [12, -12], [8, -8]),
                  rotateY: useTransform(rotateY, [-12, 12], [-8, 8]),
                }}
                src={item.src}
                className="w-24 aspect-auto pointer-events-none"
              />
              <motion.h2
                style={{
                  x: useTransform(x, [0, 1], [-14, 15]),
                  y: useTransform(y, [0, 1], [-14, 15]),
                  rotateX: useTransform(rotateX, [12, -12], [8, -8]),
                  rotateY: useTransform(rotateY, [-12, 12], [-8, 8]),
                  filter: useMotionTemplate`drop-shadow(${useTransform(
                    x,
                    [0, 1],
                    [10, -9]
                  )}px ${useTransform(
                    y,
                    [0, 1],
                    [10, -9]
                  )}px 1px rgba(0,0,0,0.5))`,
                }}
                className="text-md font-medium font-agra text-center leading-tight"
              >
                {item.name}
              </motion.h2>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
