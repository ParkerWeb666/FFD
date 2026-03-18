import Line from "../components/ui/line.jsx";
import "./Whyme.css";
import { benefits } from "../data/content.js";
import BenefitCase from "../components/ui/benefitCase.jsx";
import { motion } from "motion/react";

function Whyme() {
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
    <div className="whyme-container" id="whyme">
      <div className="whyme">
        <div className="back-glare1"></div>
        <div className="back-glare2"></div>
        <div className="whyme-head">
          <h2>Почему выбирают меня</h2>
          <Line />
          <p>Профессиональный подход к каждому проекту</p>
        </div>
        <motion.div
          className="benefits"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefits) => (
            <BenefitCase
              key={benefits.id}
              title={benefits.title}
              description={benefits.description}
              bg={benefits.bg}
              icon={benefits.icon}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Whyme;
