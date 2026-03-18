import Deploy from "../assets/icons/services/deploy.svg";
import Design from "../assets/icons/services/design.svg";
import Dev from "../assets/icons/services/dev.svg";
import Optimization from "../assets/icons/services/optimization.svg";
import SPA from "../assets/icons/services/spa-ssr.svg";
import UI from "../assets/icons/services/ui-ux.svg";

import Blog from "../assets/images/blog.avif";
import Corp from "../assets/images/corp.png";
import Designer from "../assets/images/designer.jpg";
import E_Com from "../assets/images/e-commerce.webp";
import FFD from "../assets/images/FFD.png";
import Fixtech from "../assets/images/fixtech.png";

import Time from "../assets/icons/whyme/time.svg";
import Price from "../assets/icons/whyme/price.svg";
import Comm from "../assets/icons/whyme/comm.svg";
import Protect from "../assets/icons/whyme/protect.svg";
import Detail from "../assets/icons/whyme/detail.svg";
import Scalling from "../assets/icons/whyme/scalling.svg";

export const cards = [
  {
    id: 1,
    title: "Веб-разработка",
    description:
      "Создание современных веб-приложений на React, Next.js с чистым и поддерживаемым кодом",
    fullDescription:
      "Создаю современные веб-приложения с использованием React и Next.js. Основной фокус — чистая архитектура проекта, понятная структура кода и использование актуальных инструментов фронтенд-разработки. Это позволяет легко масштабировать проект и поддерживать его в дальнейшем. В работе уделяю внимание производительности, удобству пользователя и качеству реализации интерфейсов. Каждый проект строится так, чтобы он был стабильным, быстрым и готовым к развитию — от небольших сайтов до сложных веб-приложений.",
    image: Dev,
    bg: "linear-gradient(135deg, #2B7FFF, #00B8DB)",
    cardBg:
      "linear-gradient(135deg, rgba(43,127,255,0.15), rgba(0,184,219,0.15))",
  },
  {
    id: 2,
    title: "Адаптивный дизайн",
    description:
      "Идеальное отображение на всех устройствах - от смартфонов до больших экранов",
    fullDescription:
      "Разрабатываю интерфейсы, которые корректно отображаются на любых устройствах: смартфонах, планшетах, ноутбуках и широкоформатных мониторах. Важно, чтобы пользователь получал одинаково удобный опыт независимо от размера экрана. Использую современные подходы к адаптивной верстке: гибкие сетки, медиазапросы и оптимизированные компоненты. Это обеспечивает стабильную работу интерфейса и комфортную навигацию на любом устройстве.",
    image: Design,
    bg: "linear-gradient(135deg, #AD46FF, #F6339A)",
    cardBg:
      "linear-gradient(135deg, rgba(173,70,255,0.15), rgba(246,51,154,0.15))",
  },
  {
    id: 3,
    title: "Оптимизация производительности",
    description:
      "Быстрая загрузка и плавная работаблагодаря современным практикам оптимизации",
    fullDescription:
      "Скорость загрузки и плавность работы сайта напрямую влияют на пользовательский опыт. Поэтому при разработке применяются современные техники оптимизации: разделение кода, ленивые загрузки компонентов, оптимизация изображений и минимизация ресурсов. Такие подходы позволяют значительно сократить время загрузки страниц и обеспечить стабильную работу интерфейса даже на слабых устройствах или медленном интернет-соединении.",
    image: Optimization,
    bg: "linear-gradient(135deg, #F0B100, #FF6900)",
    cardBg:
      "linear-gradient(135deg, rgba(240,177,0,0.15), rgba(255,105,0,0.15))",
  },
  {
    id: 4,
    title: "UI/UX реализация",
    description:
      "Превращаю дизайн-макеты в pixel-perfect интерфейсы с вниманием к деталям",
    fullDescription:
      "Превращаю дизайн-макеты в точные и аккуратные интерфейсы, максимально соответствующие исходному дизайну. В процессе разработки уделяю внимание каждой детали — от отступов и типографики до анимаций и интерактивных элементов. Цель — создать интерфейс, который выглядит профессионально и при этом остаётся удобным для пользователя. Pixel-perfect реализация помогает сохранить идею дизайна и сделать продукт визуально цельным.",
    image: UI,
    bg: "linear-gradient(135deg, #00C950, #00BC7D)",
    cardBg:
      "linear-gradient(135deg, rgba(0,201,80,0.15), rgba(0,188,125,0.15))",
  },
  {
    id: 5,
    title: "SPA & SSR",
    description:
      "Разработка одностраничных приложений и серверный рендеринг для SEO",
    fullDescription:
      "Разрабатываю одностраничные приложения (SPA), которые обеспечивают быстрые переходы между страницами без полной перезагрузки сайта. Это делает интерфейс более динамичным и отзывчивым для пользователя. Также использую серверный рендеринг (SSR) в проектах на Next.js. Такой подход улучшает SEO, ускоряет первую загрузку страницы и позволяет сайту лучше индексироваться поисковыми системами.",
    image: SPA,
    bg: "linear-gradient(135deg, #615FFF, #2B7FFF)",
    cardBg:
      "linear-gradient(135deg, rgba(97,95,255,0.15), rgba(43,127,255,0.15))",
  },
  {
    id: 6,
    title: "Деплой и поддержка",
    description:
      "Помощь с развертыванием проекта и техническая поддержка после запуска",
    fullDescription:
      "Помогаю подготовить проект к запуску и развернуть его на сервере или облачной платформе. Настраиваю сборку проекта, домен, хостинг и оптимальную конфигурацию для стабильной работы сайта. После запуска проекта могу оказывать техническую поддержку: исправлять ошибки, обновлять функциональность и помогать с дальнейшим развитием сайта. Это позволяет проекту оставаться актуальным и работать без сбоев.",
    image: Deploy,
    bg: "linear-gradient(135deg, #FF2056, #FB2C36)",
    cardBg:
      "linear-gradient(135deg, rgba(255,32,86,0.15), rgba(251,44,54,0.15))",
  },
];

export const tech = [
  {
    id: 1,
    title: "React",
    bg: "linear-gradient(90deg, #00D3F2, #2B7FFF)",
    description:"React — это библиотека для создания интерфейсов сайтов. Она помогает делать страницы быстрыми и удобными. С помощью React можно разбивать сайт на небольшие компоненты и легко управлять ими.",
  },
  {
    id: 2,
    title: "TypeScript",
    bg: "linear-gradient(90deg, #2B7FFF, #155DFC)",
    description:"TypeScript — это расширение JavaScript. Он добавляет типы данных, благодаря чему код становится понятнее и помогает находить ошибки ещё во время разработки.",
  },
  {
    id: 3,
    title: "Next.js",
    bg: "linear-gradient(90deg, #314158, #0F172B)",
    description:"Next.js — это фреймворк на основе React для создания современных веб-сайтов. Он помогает быстрее загружать страницы, улучшает SEO и делает разработку более удобной.",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    bg: "linear-gradient(90deg, #00D3F2, #00BBA7)",
    description:"Tailwind CSS — это инструмент для быстрой стилизации сайтов. Он позволяет создавать дизайн прямо в коде, используя готовые классы, что ускоряет разработку интерфейсов.",
  },
  {
    id: 5,
    title: "Node.js",
    bg: "linear-gradient(90deg, #00C950, #00A63E)",
    description:"Node.js — это среда, которая позволяет запускать JavaScript на сервере. С её помощью можно создавать серверную логику, API и полноценные веб-приложения.",
  },
  {
    id: 6,
    title: "Git",
    bg: "linear-gradient(90deg, #FF6900, #FB2C36)",
    description:"Git — система контроля версий. Она помогает сохранять историю изменений в коде, работать в команде и возвращаться к предыдущим версиям проекта.",
  },
  {
    id: 7,
    title: "Figma",
    bg: "linear-gradient(90deg, #AD46FF, #F6339A)",
    description:"Figma — онлайн-инструмент для создания дизайна сайтов и приложений. В нём можно делать макеты интерфейсов и удобно работать вместе с разработчиками и дизайнерами.",
  },
  {
    id: 8,
    title: "Redux",
    bg: "linear-gradient(90deg, #9810FA, #8200DB)",
    description:"Redux — библиотека для управления состоянием приложения. Она помогает хранить данные приложения в одном месте и удобно управлять ими.",
  },
  {
    id: 9,
    title: "Webpack",
    bg: "linear-gradient(90deg, #F0B100, #FF6900)",
    description:"Webpack — инструмент для сборки проекта. Он объединяет все файлы (JavaScript, стили, изображения) в оптимизированную структуру, чтобы сайт быстрее загружался.",
  },
  {
    id: 10,
    title: "Jest",
    bg: "linear-gradient(90deg, #2B7FFF, #00B8DB)",
    description:"",
  },
  {
    id: 11,
    title: "React Query",
    bg: "linear-gradient(90deg, #00C950, #00A63E)",
    description:"",
  },
  {
    id: 12,
    title: "Framer Motion",
    bg: "linear-gradient(90deg, #FFDD00, #d9ff00)",
    description:"",
  },
  {
    id: 13,
    title: "Responsive",
    bg: "linear-gradient(90deg, #00D3F2, #00BBA7)",
    description:"",
  },
  {
    id: 14,
    title: "Charts",
    bg: "linear-gradient(90deg, #615FFF, #2B7FFF)",
    description:"",
  },
];

export const cases = [
  {
    id: 1,
    sitename: "E-commerce платформа",
    description:
      "Современный интернет-магазин с корзиной, фильтрами и платежами",
    img: E_Com,
    usedtech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    sitename: "Портфолио для дизайнера",
    description: "Элегантное портфолио с анимациями и галереей работ",
    img: Designer,
    usedtech: ["React", "Framer Motion", "Responsive"],
  },
  {
    id: 3,
    sitename: "Блог-платформа",
    description: "Платформа для публикации статей с поддержкой Markdown",
    img: Blog,
    usedtech: ["Next.js", "React Query", "Charts"],
  },
  {
    id: 4,
    sitename: "Корпоративный сайт",
    description: "Сайт компании с информацией о услугах и контактами",
    img: Corp,
    usedtech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 5,
    sitename: "Личный сайт",
    description: "Личный сайт с биографией, проектами и контактами",
    img: FFD,
    usedtech: [
      "React",
      "ESLint",
      "Framer Motion",
      "Responsive",
      "Git",
      "Figma",
    ],
  },
  {
    id: 6,
    sitename: "Сайт по ремонту техники",
    description: "Сайт с формой заявки и каталогом услуг по ремонту техники",
    img: Fixtech,
    usedtech: ["JS", "MySQL", "CSS"],
  },
];
export const benefits = [
  {
    id: 1,
    title: "Быстрые сроки",
    description: "Соблюдаю дедлайны и держу в курсе прогресса",
    bg: "linear-gradient(120deg, #2B7FFF, #00B8DB)",
    icon: Time,
  },
  {
    id: 2,
    title: "Прозрачные цены",
    description: "Фиксированная стоимость или почасовая оплата",
    bg: "linear-gradient(120deg, #00C950, #00BC7D)",
    icon: Price,
  },
  {
    id: 3,
    title: "Постоянная связь",
    description: "Быстрые ответы и регулярные обновления",
    bg: "linear-gradient(120deg, #AD46FF, #F6339A)",
    icon: Comm,
  },
  {
    id: 4,
    title: "Качественный код",
    description: "Чистый, документированный и тестируемый код",
    bg: "linear-gradient(120deg, #FF6900, #FB2C36)",
    icon: Protect,
  },
  {
    id: 5,
    title: "Внимание к деталям",
    description: "Pixel-perfect реализация дизайна",
    bg: "linear-gradient(120deg, #F0B100, #FF6900)",
    icon: Detail,
  },
  {
    id: 6,
    title: "Масштабируемость",
    description: "Архитектура, готовая к росту проекта",
    bg: "linear-gradient(120deg, #615FFF, #AD46FF)",
    icon: Scalling,
  },
];

export const review = [
  {
    id: 1,
    name: "Алексей",
    secondName: "Иванов",
    work: "CEO, TechStart",
    text: "Отличный разработчик! Сделал наш сайт быстрее, чем ожидали, и качество работы превзошло ожидания. Обязательно будем обращаться снова.",
    rate: 4,
  },
  {
    id: 2,
    name: "Мария",
    secondName: "Петрова",
    work: "Product Manager, DigitalWave",
    text: "Профессиональный подход, отличная коммуникация и внимание к деталям. Проект был сдан в срок, все наши требования были учтены.",
    rate: 5,
  },
  {
    id: 3,
    name: "Дмитрий",
    secondName: "Сидоров",
    work: "Founder, StartupHub",
    text: "Работа с этим разработчиком - одно удовольствие. Понимает задачу с полуслова, предлагает улучшения, код чистый и понятный.",
    rate: 3,
  },
];
