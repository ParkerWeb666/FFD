import { motion } from "motion/react";
import "./techButt.css";

export default function Tech({ title, bg }) {
  return (
    <motion.div
      className="tech"
      style={{ "--hover-bg": bg }}
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1 },
      }}
      transition={{ duration: 0.4 }}
      whileHover={{
        rotate: [-10, 10, -10],
        transition: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
        }
      }}
      whileTap={{ scale: 1 }}
    >
      <a>{title}</a>
    </motion.div>
  );
}
