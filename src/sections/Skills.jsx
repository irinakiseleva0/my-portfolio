import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";
import skills from "../data/skills.js";

function Skills({ lang }) {
    const t = {
        en: {
            title: "Skills",
            intro: "Here are some of the technologies and tools I’ve been working with:",
        },
        fr: {
            title: "Compétences",
            intro: "Voici quelques technologies et outils avec lesquels je travaille :",
        },
    }[lang || "en"];

    return (
        <motion.section
            id="skills"
            className="section skills"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container">
                <motion.h2 variants={fadeInUp}>{t.title}</motion.h2>
                <motion.p className="skills__intro" variants={fadeInUp}>
                    {t.intro}
                </motion.p>

                <motion.ul className="skills-list" variants={containerStagger}>
                    {skills.map((skill) => (
                        <motion.li
                            key={skill}
                            className="skills-list__item"
                            variants={fadeInUp}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.section>
    );
}

export default Skills;
