import { motion } from "motion/react";
import Line from "../components/ui/line.jsx";
import ReviewCase from "../components/ui/reviewCase.jsx";
import { review } from "../data/content.js";

import "./Review.css";

function Review() {
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
    <div className="review-container" id="review">
      <div className="lines-bg"></div>
      <section className="review">
        <div className="review-head">
          <h2>Отзывы клиентов</h2>
          <Line />
          <p>Что говорят те, кто уже работал со мной</p>
        </div>

        <motion.div
          className="review-cases"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {review.map((review) => (
            <ReviewCase
              key={review.id}
              name={review.name}
              secondName={review.secondName}
              work={review.work}
              text={review.text}
              rate={review.rate}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Review;
