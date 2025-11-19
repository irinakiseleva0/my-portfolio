import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";

function Education({ lang }) {
    const t = {
        en: {
            title: "Education",
            school: "EPITA — School of Engineering and Computer Science",
            degree: "Bachelor’s in Computer Science and Engineering",
            year: "2023 — Present",
            bullet1: "Currently in 2nd year",
            bullet2: "Courses: Algorithms, C Programming, Python, Web Development",
            bullet3: "Strong focus on computational thinking & engineering foundations",
        },
        fr: {
            title: "Formation",
            school: "EPITA — École d’ingénieurs en informatique",
            degree: "Licence en ingénierie et informatique",
            year: "2023 — Aujourd’hui",
            bullet1: "Actuellement en 2ᵉ année",
            bullet2:
                "Cours : algorithmes, programmation en C, Python, développement web",
            bullet3:
                "Accent sur la pensée computationnelle et les bases de l’ingénierie",
        },
    }[lang || "en"];

    return (
        <motion.section
            id="education"
            className="section education"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container">
                <motion.h2 variants={fadeInUp}>{t.title}</motion.h2>

                <motion.div
                    className="education__timeline"
                    variants={containerStagger}
                >
                    <motion.div className="education__item" variants={fadeInUp}>
                        <div className="education__year">{t.year}</div>
                        <div className="education__content">
                            <h3>{t.school}</h3>
                            <p>{t.degree}</p>
                            <ul>
                                <li>• {t.bullet1}</li>
                                <li>• {t.bullet2}</li>
                                <li>• {t.bullet3}</li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Education;
