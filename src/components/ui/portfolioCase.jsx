import { motion } from "motion/react";
import "./portfolioCase.css";

function Case({ sitename, description, img, usedtech }) {
  return (
    <div>
      <motion.div
        className="case"
        variants={{
          hidden: { visibility: "hidden", x: -150 },
          visible: { visibility: "visible", x: 0 },
        }}
        whileHover={{
          translateY: -10,
          outline: "1px solid #50A2FF",
        }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="case-img">
          <img src={img} alt={sitename} />
        </div>
        <div className="case-info">
          <h3>{sitename}</h3>
          <p>{description}</p>
          <div className="case-tech">
            {usedtech?.map((tech, index) => (
              <a key={index} className="used-tech">
                {tech}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Case;
