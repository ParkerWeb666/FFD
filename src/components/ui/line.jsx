import React from "react";
import { motion } from "motion/react";
// import "./line.css";

export default function Line() {
  return (
    <motion.div
      className="line"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        width: "80px",
        height: "4px",
        background: "linear-gradient(90deg, #2B7FFF, #AD46FF)",
        transformOrigin: "center",
        borderRadius: "10px"
      }}
    ></motion.div>
  );
}
