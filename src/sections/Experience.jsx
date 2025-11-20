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
            period: "2023 — Present",
            bullets: [
                "Worked on C programming assignments focusing on memory management, pointers and low-level problem solving.",
                "Developed Python scripts and small tools to automate tasks and practice algorithmic thinking.",
                "Built web interfaces using HTML, CSS, JavaScript and React to improve frontend skills.",
                "Collaborated with classmates on group projects, practicing Git workflows (branches, merge requests).",
            ],
        },
    ],
    fr: [
        {
            title: "Projets académiques à EPITA",
            role: "Développeuse logiciel (étudiante)",
            period: "2023 — Aujourd’hui",
            bullets: [
                "Travail sur des projets en C axés sur la gestion de la mémoire, les pointeurs et la résolution de problèmes bas niveau.",
                "Développement de scripts et petits outils en Python pour automatiser des tâches et pratiquer la pensée algorithmique.",
                "Création d’interfaces web avec HTML, CSS, JavaScript et React pour améliorer mes compétences frontend.",
                "Collaboration avec des camarades sur des projets de groupe en utilisant Git (branches, merge requests).",
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
