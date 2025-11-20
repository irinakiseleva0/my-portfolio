import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, containerStagger } from "../animation/variants.js";

function About({ lang, refProp }) {
  const t = {
    en: {
      title: "About Me",
      p1: "I'm a 2nd-year Computer Science student at EPITA, working toward a Bachelor's degree in Computer Science and Engineering.",
      p2: "I like combining logical thinking with creativity: programming gives me structure and problem-solving skills, while writing and communication help me express ideas clearly and effectively.",
      p3: "I'm currently improving my skills in C, Python, JavaScript, React, and building a stronger understanding of computer science fundamentals.",
      factsTitle: "Quick facts",
      facts: [
        "2nd-year CS student at EPITA",
        "Software Developer",
        "Interested in writing & digital communication",
        "Curious, motivated and always learning",
      ],
    },
    fr: {
      title: "À propos de moi",
      p1: "Je suis étudiante en 2ᵉ année d’informatique à EPITA, en licence d’ingénierie et d’informatique.",
      p2: "J’aime combiner la logique et la créativité : la programmation m’apporte de la structure et des compétences de résolution de problèmes, tandis que l’écriture et la communication m’aident à expliquer des idées de façon claire.",
      p3: "En ce moment, je développe mes compétences en C, Python, JavaScript, React et je renforce mes bases en informatique.",
      factsTitle: "En bref",
      facts: [
        "Étudiante en 2ᵉ année à EPITA",
        "Développeuse logiciel",
        "Intéressée par l’écriture et la communication digitale",
        "Curieuse, motivée et toujours en train d’apprendre",
      ],
    },
  }[lang || "en"];

  return (
    <motion.section
      id="about"
      ref={refProp}
      className="section about"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container about__content">
        {/* Текст: выезд слева + fade-in */}
        <motion.div className="about__text" variants={fadeInLeft}>
          <h2>{t.title}</h2>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </motion.div>

        {/* Факты: простой fadeInUp */}
        <motion.div className="about__facts" variants={fadeInUp}>
          <h3>{t.factsTitle}</h3>
          <ul>
            {t.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
