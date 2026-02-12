import { motion } from "motion/react";
import "./card.css";

export default function Card({ title, description, image, bg, cardBg }) {
  return (
    <motion.div
      className="card"
      style={{ "--hover-bg": cardBg }}
      whileHover={{
        translateY: -10,
      }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="card-head">
        <div className="frame-img" style={{ background: bg }}>
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </motion.div>
  );
}
