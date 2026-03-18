import { motion } from "motion/react";
import Github from "../../assets/icons/github.svg?react";
import Mail from "../../assets/icons/mail.svg?react";
import Tg from "../../assets/icons/tg.svg?react";

import React from "react";
import "./button.css";
const TgLogo = motion.create(Tg);
const MailLogo = motion.create(Mail);
const GithubLogo = motion.create(Github);
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
        onClick={() => window.open("https://t.me/parker4556", "_blank")}
      >
        <TgLogo />
      </motion.button>
      <motion.button
        className="butt-social"
        whileHover={{
          rotate: 5,
          scale: 1.1,
          background: "linear-gradient(135deg, #ff46e0, #b764fb)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const link = document.createElement("a");
          link.href =
            "mailto:example@example.com?subject=Привет&body=Текст письма";
          link.click();
        }}
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
        onClick={() => window.open("https://github.com/ParkerWeb666", "_blank")}
      >
        <GithubLogo />
      </motion.button>
    </div>
  );
}

export default Button;
