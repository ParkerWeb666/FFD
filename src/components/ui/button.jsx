import { motion } from "motion/react";
import Github from "../../assets/icons/github.svg?react";
import Mail from "../../assets/icons/mail.svg?react";
import Tg from "../../assets/icons/tg.svg?react";

import React from "react";
import "./button.css";
const TgLogo = motion(Tg);
const MailLogo = motion(Mail);
const GithubLogo = motion(Github);
function Button() {
  return (
    <div className="button-social">
      <motion.button
        className="butt-social"
        whileHover={{
          background: "linear-gradient(135deg, #4649ff, #64c4fb)",
          rotate: 5,
          scale: 1.1,
        }}
        whileTap={{ scale: 0.95 }}
        //   onHoverStart={() => console.log("hover started!")}
      >
        <TgLogo />
      </motion.button>
      <motion.button
        className="butt-social"
        whileHover={{
          // backgroundColor: "#323f5d",
          rotate: 5,
          scale: 1.1,
          background: "linear-gradient(135deg, #ff46e0, #b764fb)",
        }}
        whileTap={{ scale: 0.95 }}
        //   onHoverStart={() => console.log("hover started!")}
      >
        <MailLogo />
      </motion.button>
      <motion.button
        className="butt-social"
        whileHover={{
          background: "linear-gradient(135deg, #8aff46, #64c4fb)",

          rotate: 5,
          scale: 1.1,
        }}
        whileTap={{ scale: 0.95 }}
        //   onHoverStart={() => console.log("hover started!")}
      >
        <GithubLogo />
      </motion.button>
    </div>
  );
}

export default Button;
