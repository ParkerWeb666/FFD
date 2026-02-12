import Deploy from "../assets/icons/services/deploy.svg";
import Design from "../assets/icons/services/design.svg";
import Dev from "../assets/icons/services/dev.svg";
import Optimization from "../assets/icons/services/optimization.svg";
import SPA from "../assets/icons/services/spa-ssr.svg";
import UI from "../assets/icons/services/ui-ux.svg";

export const cards = [
  {
    id: 1,
    title: "Веб-разработка",
    description: "Создание современных веб-приложений на React, Next.js с чистым и поддерживаемым кодом",
    image: Dev,
    bg: "linear-gradient(135deg, #2B7FFF, #00B8DB)",
    cardBg: "linear-gradient(135deg, rgba(43,127,255,0.15), rgba(0,184,219,0.15))"
  },
  {
    id: 2,
    title: "Адаптивный дизайн",
    description: "Идеальное отображение на всех устройствах - от смартфонов до больших экранов",
    image: Design,
    bg: "linear-gradient(135deg, #AD46FF, #F6339A)",
    cardBg: "linear-gradient(135deg, rgba(173,70,255,0.15), rgba(246,51,154,0.15))"
  },
  {
    id: 3,
    title: "Оптимизация производительности",
    description: "Быстрая загрузка и плавная работаблагодаря современным практикам оптимизации",
    image: Optimization,
    bg: "linear-gradient(135deg, #F0B100, #FF6900)",
    cardBg: "linear-gradient(135deg, rgba(240,177,0,0.15), rgba(255,105,0,0.15))"
  },
  {
    id: 4,
    title: "UI/UX реализация",
    description: "Превращаю дизайн-макеты в pixel-perfectинтерфейсы с вниманием к деталям",
    image: UI,
    bg: "linear-gradient(135deg, #00C950, #00BC7D)",
    cardBg: "linear-gradient(135deg, rgba(0,201,80,0.15), rgba(0,188,125,0.15))"
  },
  {
    id: 5,
    title: "SPA & SSR",
    description: "Разработка одностраничных приложений и серверный рендеринг для SEO",
    image: SPA,
    bg: "linear-gradient(135deg, #615FFF, #2B7FFF)",
    cardBg: "linear-gradient(135deg, rgba(97,95,255,0.15), rgba(43,127,255,0.15))"
  },
  {
    id: 6,
    title: "Деплой и поддержка",
    description: "Помощь с развертыванием проекта и техническая поддержка после запуска",
    image: Deploy,
    bg: "linear-gradient(135deg, #FF2056, #FB2C36)",
    cardBg: "linear-gradient(135deg, rgba(255,32,86,0.15), rgba(251,44,54,0.15))"
  },
];

