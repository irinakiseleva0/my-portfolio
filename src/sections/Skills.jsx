// src/sections/Skills.jsx
import { motion } from "framer-motion";
import { fadeInUp, containerStagger, listStagger } from "../animation/variants.js";

/* ==== SVG ICONS ==== */

function FrontendIcon() {
  return (
    <svg
      className="skills__icon-svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="grad-frontend" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect
        x="4"
        y="7"
        width="24"
        height="18"
        rx="3"
        fill="url(#grad-frontend)"
      />
      <rect x="7" y="10" width="18" height="2" rx="1" fill="#0f172a" />
      <rect x="7" y="14" width="10" height="2" rx="1" fill="#e5e7eb" />
      <rect x="7" y="18" width="7" height="2" rx="1" fill="#e5e7eb" />
      <circle cx="24" cy="18" r="2" fill="#facc15" />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg
      className="skills__icon-svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="grad-backend" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <rect
        x="6"
        y="7"
        width="20"
        height="5"
        rx="2"
        fill="url(#grad-backend)"
      />
      <rect
        x="6"
        y="14"
        width="20"
        height="5"
        rx="2"
        fill="url(#grad-backend)"
      />
      <rect
        x="6"
        y="21"
        width="20"
        height="5"
        rx="2"
        fill="url(#grad-backend)"
      />
      <circle cx="9" cy="9.5" r="1.1" fill="#022c22" />
      <circle cx="9" cy="16.5" r="1.1" fill="#022c22" />
      <circle cx="9" cy="23.5" r="1.1" fill="#022c22" />
    </svg>
  );
}

function SystemsIcon() {
  return (
    <svg
      className="skills__icon-svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="grad-systems" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="7" fill="url(#grad-systems)" />
      <circle cx="16" cy="16" r="3" fill="#0b1120" />
      <line
        x1="16"
        y1="5"
        x2="16"
        y2="9"
        stroke="#f97316"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="23"
        x2="16"
        y2="27"
        stroke="#f97316"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="5"
        y1="16"
        x2="9"
        y2="16"
        stroke="#f97316"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="23"
        y1="16"
        x2="27"
        y2="16"
        stroke="#f97316"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg
      className="skills__icon-svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="grad-tools" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <path
        d="M11 7a4 4 0 0 0 4.9 3.9l1.9 1.9-3.8 3.8-3.1-3.1-3.5 3.5 6.2 6.2 3.5-3.5-3.1-3.1 3.8-3.8 1.9 1.9A4 4 0 0 0 25 13l-3.2-3.2-1.3 1.3-2.9-2.9 1.3-1.3L16 4.5A4 4 0 0 0 11 7Z"
        fill="url(#grad-tools)"
      />
    </svg>
  );
}

/* ==== DATA ==== */

const skillsData = {
  frontend: {
    icon: <FrontendIcon />,
    label: { en: "Frontend", fr: "Frontend" },
    items: [
      "HTML5",
      "CSS3 (Flexbox, Grid)",
      "JavaScript (ES6+)",
      "React (Hooks, Components)",
      "TypeScript (basic)",
      "Responsive / Mobile-First Design",
    ],
  },
  backend: {
    icon: <BackendIcon />,
    label: { en: "Backend", fr: "Backend" },
    items: [
      "Python",
      "Django (Views, Routing, File Processing)",
      "REST APIs (fetch, JSON)",
      "Basic SQL (MySQL / PostgreSQL)",
    ],
  },
  systems: {
    icon: <SystemsIcon />,
    label: { en: "Low-level & Systems", fr: "Bas niveau & systèmes" },
    items: ["C Programming", "Linux basics"],
  },
  tools: {
    icon: <ToolsIcon />,
    label: { en: "Tools", fr: "Outils" },
    items: ["Git / GitHub / GitLab", "VS Code", "Render / Vercel"],
  },
};

function Skills({ lang, refProp }) {
  const t = {
    en: { title: "Skills" },
    fr: { title: "Compétences" },
  }[lang || "en"];

  const getLabel = (group) => group.label[lang] || group.label.en;

  return (
    <motion.section
      id="skills"
      ref={refProp}
      className="section skills"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.h2 variants={fadeInUp}>{t.title}</motion.h2>

        <motion.div className="skills__grid" variants={listStagger}>
          {Object.entries(skillsData).map(([key, group]) => (
            <motion.article
              key={key}
              className="skills__card"
              variants={fadeInUp}
              whileHover={{
                y: -4,
                rotateX: 4,
                rotateY: -4,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 16,
              }}
            >
              <h3 className="skills__category">
                <span className="skills__icon-wrapper">
                  {group.icon}
                </span>
                <span>{getLabel(group)}</span>
              </h3>

              <ul className="skills__chips">
                {group.items.map((skill) => (
                  <li key={skill} className="skill-chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;
