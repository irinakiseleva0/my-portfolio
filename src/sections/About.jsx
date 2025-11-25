import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, containerStagger } from "../animation/variants.js";

function About({ lang, refProp }) {
  const t = {
    en: {
      title: "About Me",
      p1: "I'm a 2nd-year Computer Science student at EPITA, working toward my Bachelor's in Computer Science and Engineering.",
      p2: "I enjoy combining logic with creativity - coding gives me structure and problem-solving skills, while writing and communication help me express ideas in a clear, engaging way.",
      p3: "Right now, I'm improving my skills in C, Python, JavaScript, and React, and building a stronger foundation in core computer science concepts.",
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
      p1: "Je suis en deuxième année d’informatique à EPITA, où je prépare une licence en ingénierie informatique.",
      p2: "J’aime mélanger la logique et la créativité : la programmation m’apporte une vraie rigueur et le goût de résoudre des problèmes, tandis que l’écriture et la communication m’aident à transmettre mes idées de façon claire et naturelle.",
      p3: "En ce moment, je continue à progresser en C, Python, JavaScript et React, tout en renforçant mes bases en informatique.",
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
        {}
        <motion.div className="about__text" variants={fadeInLeft}>
          <h2>{t.title}</h2>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </motion.div>

        {}
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
