// src/sections/Experience.jsx
import { motion } from "framer-motion";
import {
    fadeInUp,
    containerStagger,
    listStagger,
    scaleIn,
} from "../animation/variants.js";

const experienceItems = {
    en: [
        {
            title: "Academic Projects at EPITA",
            role: "Software Developer (Student)",
            period: "2024 — 2027",
            bullets: [
                "Wrote Python scripts and small tools to automate tasks and strengthen algorithmic thinking.",
                "Built web interfaces with HTML, CSS, JavaScript, and React to improve my frontend skills.",
                "Worked with classmates on group assignments while practicing Git workflows (branches, merge requests).",
            ],
        },
    ],
    fr: [
        {
            title: "Projets académiques à EPITA",
            role: "Développeuse logiciel (étudiante)",
            period: "2024 — 2027",
            bullets: [
                "Développement de scripts et de petits outils en Python pour automatiser certaines tâches et renforcer ma réflexion algorithmique.",
                "Création d’interfaces web avec HTML, CSS, JavaScript et React pour améliorer mes compétences en frontend.",
                "Collaboration sur des projets de groupe avec Git, en utilisant les branches et les merge requests.",
            ],
        },
    ],
};

function Experience({ lang, refProp }) {
    const t = {
        en: { title: "Experience" },
        fr: { title: "Expérience" },
    }[lang || "en"];

    const items = experienceItems[lang] || experienceItems.en;

    return (
        <motion.section
            id="experience"
            ref={refProp}
            className="section experience"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            <div className="container">
                <motion.h2 variants={fadeInUp}>{t.title}</motion.h2>

                <motion.div className="experience__list" variants={listStagger}>
                    {items.map((exp) => (
                        <motion.article
                            key={exp.title}
                            className="experience-card"
                            variants={scaleIn}
                        >
                            <div className="experience-card__header">
                                <h3>{exp.title}</h3>
                                <span className="experience-card__period">{exp.period}</span>
                            </div>
                            <p className="experience-card__role">{exp.role}</p>
                            <ul className="experience-card__bullets">
                                {exp.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Experience;
