import Line from "../components/ui/line.jsx";
import Tech from "../components/ui/techButt.jsx";
import { tech } from "../data/content.js";
import { motion } from "motion/react";

import "./Technologies.css";

const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
const item = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};
function Technologies() {
  

  return (
    <div className="technologies-container">
      <section className="technologies">
        <div className="tech-head">
          <h2>Технологии</h2>
          <Line />
          <p>Современный стек технологий для создания лучших продуктов</p>
        </div>

        <motion.div
          className="tech-butt"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tech.slice(0, 9).map((tech) => (
            <Tech key={tech.id} title={tech.title} bg={tech.bg} variants={item}/>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Technologies;
