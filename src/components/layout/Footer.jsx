import Button from "../../components/ui/button.jsx";
import "./Footer.css";
import Heart from "../../assets/heart.svg?react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="footer-container" id="footer">
      <div className="footer">
        <div className="navigation">
          <div className="nav-info">
            <h4>Frontend Developer</h4>
            <p>
              Создаю современные веб-приложения, <br />
              которые помогают бизнесу расти
            </p>
          </div>
          <div className="nav-nav">
            <div className="nav-title">
              <h5>Навигация</h5>
              <nav>
                <a
                  onClick={() =>
                    document
                      .getElementById("start")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Главная
                </a>
                <a
                  onClick={() =>
                    document
                      .getElementById("services")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Услуги
                </a>
                <a
                  onClick={() =>
                    document
                      .getElementById("technologies")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Технологии
                </a>
                <a
                  onClick={() =>
                    document
                      .getElementById("portfolio")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Портфолио
                </a>
                <a
                  onClick={() =>
                    document
                      .getElementById("whyme")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Почему Я
                </a>
                <a
                  onClick={() =>
                    document
                      .getElementById("review")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Отзывы
                </a>
              </nav>
            </div>
          </div>
          <div className="nav-mess">
            <div className="nav-mess-title">
              <h5>Связаться</h5>
            </div>
            <Button />
          </div>
        </div>

        <div className="footer-line"></div>
        <div className="footer-copyright">
          <p>Создано с </p>
          <motion.div
            className="heart"
            delay={0.5}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          >
            <Heart className="heart-icon" />
          </motion.div>

          <p>для ваших проектов © 2026</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
