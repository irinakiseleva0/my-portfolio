import { motion } from "framer-motion";
import { fadeInUp, containerStagger, listStagger } from "../animation/variants.js";
import skills from "../data/skills.js";

function Skills({ lang, refProp }) {
  const t = {
    en: {
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      systems: "Low-level & Systems",
      tools: "Tools",
    },
    fr: {
      title: "Compétences",
      frontend: "Frontend",
      backend: "Backend",
      systems: "Bas niveau & Systèmes",
      tools: "Outils",
    },
  }[lang || "en"];

  return (
    <motion.section
      id="skills"
      ref={refProp}
      className="section skills"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <motion.h2 variants={fadeInUp}>{t.title}</motion.h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([categoryKey, list]) => (
            <motion.div
              key={categoryKey}
              className="skills-category"
              variants={fadeInUp}
            >
              <h3 className="skills-category__title">{t[categoryKey]}</h3>

              <motion.ul className="skills-list" variants={listStagger}>
                {list.map((skill) => (
                  <motion.li
                    key={skill}
                    className="skill-chip"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, translateY: -2 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
