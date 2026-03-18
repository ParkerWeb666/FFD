import Line from "../components/ui/line.jsx";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Mess from "../assets/mail.svg?react";
import "./Partnership.css";
import Mail from "../assets/icons/mail.svg?react";
import Time from "../assets/icons/whyme/time.svg?react";
import Location from "../assets/location.svg?react";
import { motion } from "motion/react";
import Tg from "../assets/icons/tg.svg?react";
import { Input } from "antd";

function Partnership() {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_s6wetvq",
        "template_cmyv2au",
        e.target,
        "bGNgYoRmHD92pvjhC",
      )
      .then(() => {
        setIsSent(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Ошибка отправки");
        setLoading(false);
      });
  };
  return (
    <div className="partnership-container" id="partnership">
      <section className="partnership">
        <div className="partnership-head">
          <h2>Начнем сотрудничество</h2>
          <Line />
          <p>Напишите о вашем проекте, и я отвечу в течение 24 часов</p>
        </div>
        <div className="partnership-blocks">
          {!isSent ? (
            <motion.form
              className="partnership-form"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { visibility: "hidden", x: -150 },
                visible: { visibility: "visible", x: 0 },
              }}
              transition={{ duration: 0.9 }}
              onSubmit={sendEmail}
            >
              <div className="label-form">
                <Mess />
                <p>Отправить сообщение</p>
              </div>
              <div className="area-form">
                <p>Ваше имя</p>
                <input
                  type="text"
                  maxLength="40"
                  name="name"
                  required
                  autoComplete="name"
                />
                <p>Email</p>
                <input
                  type="email"
                  maxLength="50"
                  name="email"
                  required
                  autoComplete="email"
                />
                <p>Расскажите о проекте</p>
                <motion.textarea
                  className="description-area"
                  rows={3}
                  name="message"
                  required
                ></motion.textarea>

                <motion.button
                  type="submit"
                  className="button-form"
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0px 5px 8px rgb(41, 212, 255, 0.5)",
                  }}
                  whileTap={!loading ? { scale: 0.95 } : {}}
                >
                  {loading ? (
                    "Отправка..."
                  ) : (
                    <>
                      <Tg className="button-form-img" />
                      Отправить заявку
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <div className="success-block">
              <h3>Сообщение отправлено ✔</h3>
              <p>Спасибо! Я свяжусь с вами в ближайшее время.</p>
            </div>
          )}
          <motion.div
            className="partnership-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { visibility: "hidden", x: 150 },
              visible: { visibility: "visible", x: 0 },
            }}
            transition={{ duration: 0.9 }}
          >
            <div className="mail-card">
              <div className="mail-card-logo">
                <Mail className="mail-img" />
              </div>

              <h4>Email</h4>
              <a href="your.email@example.com">your.email@example.com</a>
            </div>
            <div className="time-card">
              <div className="time-top">
                <div className="time-card-logo">
                  <Time />
                </div>
                <h4>Обычно отвечаю</h4>
                <p>В течение 24 часов</p>
              </div>
              <div className="time-card-line"></div>
              <div className="time-bottom">
                <Location />
                <div className="time-card-title">
                  <h4>Формат работы</h4>
                  <p>Удалённо, любой часовой пояс</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Partnership;
