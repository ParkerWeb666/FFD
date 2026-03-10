import { motion } from "motion/react";
import Mark from "../../assets/mark.svg?react";
import Star from "../../assets/star.svg?react";
import "./reviewCase.css";

function ReviewCase({ name, secondName, work, text, rate }) {
  const logo = `${name?.[0] || ""}${secondName?.[0] || ""}`;
  const clientName = `${name} ${secondName}`;
  const containerStar = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };
  const star = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: [0, 1.3, 1],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };
  const rating = Array.from({ length: rate }, (_, i) => (
    <motion.div key={i} variants={star}>
      <Star />
    </motion.div>
  ));
  return (
    <motion.div
      className="review-case"
      variants={{
        hidden: { visibility: "hidden", scale: 0, y: 100 },
        visible: { visibility: "visible", scale: 1, y: 0},
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div
        className="stars"
        variants={containerStar}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
      >
        {rating}
      </motion.div>
      <div className="marks">
        <Mark />
        <Mark />
      </div>

      <div className="text">"{text}"</div>
      <div className="client">
        <div className="name-logo">
          <div>{logo}</div>
        </div>
        <div className="client-name">
          <a>{clientName}</a>
          <p className="work">{work}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ReviewCase;
