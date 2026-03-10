import { motion } from "motion/react";
import "./benefitCase.css";

function BenefitCase({ title, description, icon, bg }) {
  return (
    <motion.div
      className="benefit-case"
      variants={{
          hidden: { scale: 0 },
          visible: {scale: 1 },
        }}
      whileHover={{
        scale: 1.1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="benefit-icon"
        style={{ "--hover-bg": bg }}
        
        whileHover={{
          rotate: 360,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        whileTap={{ scale: 0.99 }}
      >
        <img src={icon} alt={title} />
      </motion.div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default BenefitCase;
