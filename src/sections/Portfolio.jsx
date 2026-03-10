import Line from "../components/ui/line.jsx";
import "./Portfolio.css";
import { cases } from "../data/content.js";
import Case from "../components/ui/portfolioCase.jsx";
import { motion } from "motion/react";

function Portfolio() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <div className="portfolio-head">
          <h2>Портфолио</h2>
          <Line />
          <p>Примеры успешно реализованных проектов</p>
        </div>
        <motion.div
          className="portfolio-cases"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cases.map((cases) => (
            <Case
              key={cases.id}
              sitename={cases.sitename}
              img={cases.img}
              description={cases.description}
              usedtech={cases.usedtech}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
