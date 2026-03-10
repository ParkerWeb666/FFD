import { motion } from "motion/react";
import "./card.css";

export default function Card({ title, description, image, bg, cardBg, onClick }) {
  return (
    <motion.div
      className="card"
      onClick={onClick}
      style={{ "--hover-bg": cardBg }}
      variants={{
        hidden: { visibility: "hidden", y: 50 },
        visible: { visibility: "visible", y: 0 },
      }}
      // transition={{ duration: 0.4 }}
      whileHover={{
        translateY: -10,
        boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.5)"
      }}
      whileTap={{ scale: 0.99 
        
      }}
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
