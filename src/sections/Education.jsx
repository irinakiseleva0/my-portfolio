import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";

function Education({ lang }) {
    const data = {
        en: {
            title: "Education",

            items: [
                {
                    year: "2024 - 2027",
                    school: "EPITA - School of Engineering and Computer Science",
                    degree: "Bachelor’s in Computer Science and Engineering",
                    bullets: [
                        "Currently in the 2nd year",
                        "Courses include Algorithms, C Programming, Python, and Web Development",
                        "Strong emphasis on computational thinking and solid engineering fundamentals",
                    ],
                },
                {
                    year: "2021 - 2024",
                    school: "Moscow School of Programmers",
                    degree: "Certificate in Programming (3-year program)",
                    bullets: [
                        "Object-oriented programming in C++ and C# (.NET)",
                        "Discrete mathematics, networks, and industrial programming",
                        "Final project: interactive application with game mechanics (Unreal Engine)",
                    ],
                },
                {
                    year: "2022 - 2024",
                    school: "School No. 1799, Moscow",
                    degree: "Pre-professional IT class",
                    bullets: [
                        "Completed the 'IT Class in Moscow School' program",
                    ],
                },
            ],
        },

        fr: {
            title: "Formation",

            items: [
                {
                    year: "2024 - 2027",
                    school: "EPITA - École d’ingénieurs en informatique",
                    degree: "Licence en ingénierie et informatique",
                    bullets: [
                        "Actuellement en 2ᵉ année",
                        "Cours: algorithmes, langage C, Python, développement web",
                        "Accent mis sur la pensée computationnelle et les bases solides en ingénierie",
                    ],
                },
                {
                    year: "2021 - 2024",
                    school: "Moscow School of Programmers",
                    degree: "Certificat en programmation (programme de 3 ans)",
                    bullets: [
                        "Programmation orientée objet en C++ et C# (.NET)",
                        "Mathématiques discrètes, réseaux et programmation industrielle",
                        "Projet final: application interactive avec mécaniques de jeu (Unreal Engine)",
                    ],
                },
                {
                    year: "2022 - 2024",
                    school: "École n°1799, Moscou",
                    degree: "Classe IT pré-professionnelle",
                    bullets: [
                        "Programme 'Classe IT dans l’école de Moscou' validé",
                    ],
                },
            ],
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
                <motion.h2 variants={fadeInUp}>{data.title}</motion.h2>

                <motion.div
                    className="education__timeline"
                    variants={containerStagger}
                >
                    {data.items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="education__item"
                            variants={fadeInUp}
                        >
                            <div className="education__year">{item.year}</div>
                            <div className="education__content">
                                <h3>{item.school}</h3>
                                <p>{item.degree}</p>
                                <ul>
                                    {item.bullets.map((b, i) => (
                                        <li key={i}>• {b}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Education;
