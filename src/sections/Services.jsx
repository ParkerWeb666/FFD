import React from "react";
import Card from "../components/ui/card.jsx";
import Line from "../components/ui/line.jsx";
import { cards } from "../data/content.js";
import "./Services.css";
import { motion } from "motion/react";
import { useState } from "react";
import InfoPopup from "../components/ui/infoPopup.jsx";
import { useEffect } from "react";

export default function Services() {
  const [activeItem, setActiveItem] = useState(null);
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
useEffect(() => {
  if (activeItem) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [activeItem]);
  return (
    <div className="services-container">
      <div className="dots-bg"></div>
      <section className="services">
        <div className="title">
          <h2>Услуги</h2>
          <Line />
          <p className="description">
            Полный цикл разработки frontend - от концепции до запуска
          </p>
        </div>

        <motion.div
          className="cards"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              bg={card.bg}
              cardBg={card.cardBg}
              onClick={() => setActiveItem(card)}
            />
          ))}
        </motion.div>
        {console.log(activeItem)}
        <InfoPopup card={activeItem} onClose={() => setActiveItem(null)} />
      </section>
    </div>
  );
}
