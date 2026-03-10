import { motion } from "motion/react";
import { Typed } from "react-typed";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import FloatingCode from "../components/ui/floatingCode.jsx";
import Button from "../components/ui/button.jsx";
import React from "react";
import "./Start.css";

function Start() {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  return (
    <div className="container">
      <section className="start">
        <div className="glare1"></div>
        <div className="glare2"></div>
        <div className="glare3"></div>
        <FloatingCode />
        <div className="left-side">
          <h1>
            Превращаю <br />
            идеи в
          </h1>
          <motion.h1
            className="gradient-text"
            animate={{ backgroundPosition: ["0% 50%", "300% 50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            цифровые <br />
            шедевры
          </motion.h1>

          <p className="start-description">
            Frontend разработчик с опытом создания быстрых,
            <br />
            красивых и удобных интерфейсов. Специализируюсь на
            <br />
            React, TypeScript и современных технологиях.
          </p>
          <div className="start-buttons">
            <motion.button
              className="primary-button"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 5px 8px rgb(41, 212, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              //   onHoverStart={() => console.log("hover started!")}
            >
              Начать проект
            </motion.button>
            <motion.button
              className="secondary-button"
              whileHover={{
                backgroundColor: "#1D293D",
                color: "#ffffff",
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              //   onHoverStart={() => console.log("hover started!")}
            >
              Посмотреть работы
            </motion.button>
          </div>
          <Button />
        </div>
        <motion.div className="right-side"
        variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          
        >
          <div className="gradient-console">
            <div className="base-console">
              <div className="animate-circle"></div>
              <div className="animate-box"></div>
              <div className="console">
                <div className="console-header">
                  <div
                    className="circle"
                    style={{ background: "#FB2C36" }}
                  ></div>
                  <div
                    className="circle"
                    style={{ background: "#F0B100" }}
                  ></div>
                  <div
                    className="circle"
                    style={{ background: "#00C950" }}
                  ></div>
                </div>
                
                <SyntaxHighlighter
                variants={{
              hidden: { scale: 0 },
              visible: {  scale: 1 },
            }}
                  language="javascript"
                  style={nightOwl}
                  customStyle={{
                    padding: "0",
                    margin: "0",
                    backgroundColor: "transparent",
                    fontSize: "14px",
                  }}
                >
                  {`const developer = {
  skills: ['React', 'TS'],
  quality: 'premium',
  available: true
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
export default Start;
