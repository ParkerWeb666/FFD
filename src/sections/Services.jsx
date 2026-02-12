import React from "react";
import Card from "../components/ui/card.jsx";
import Line from "../components/ui/line.jsx";
import { cards } from "../data/content.js";
import "./Services.css";
import { motion } from "motion/react";

export default function Services() {
  return (
    <div className="services-container">
      <section className="services">
        <div className="dots-bg"></div>
        <div className="title">
          <h2>Услуги</h2>
          <Line />
          <p className="description">
            Полный цикл разработки frontend - от концепции до запуска
          </p>
        </div>

        <div className="cards">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              bg={card.bg}
              cardBg={card.cardBg}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
