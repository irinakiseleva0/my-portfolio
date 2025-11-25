import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";

function CurrentlyLearning({ lang }) {
    const t = {
        en: {
            title: "Currently learning",
            subtitle:
                "Here are some of the topics and technologies I’m focusing on right now:",
            items: [
                "Getting better at React and modern JavaScript",
                "Writing cleaner, more maintainable code in C and Python",
                "Becoming more confident with Git, GitHub, and GitLab workflows",
                "Strengthening my understanding of core computer science concepts",
                "Practicing English and French in technical situations",
            ],
        },
        fr: {
            title: "En ce moment j’apprends",
            subtitle:
                "Voici quelques sujets et technologies sur lesquels je me concentre en ce moment:",
            items: [
                "Améliorer mes compétences en React et en JavaScript moderne",
                "Écrire un code plus clair et plus maintenable en C et Python",
                "Être plus à l’aise avec les workflows Git, GitHub et GitLab",
                "Approfondir les bases théoriques de l’informatique",
                "Pratiquer l’anglais et le français dans des contextes techniques",
            ],
        },
    }[lang || "en"];

    return (
        <motion.section
            id="learning"
            className="section current"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container">
                <motion.div
                    className="current-card"
                    variants={fadeInUp}
                >
                    <h2 className="current__title">{t.title}</h2>
                    <p className="current__subtitle">{t.subtitle}</p>

                    <ul className="current__list">
                        {t.items.map((item) => (
                            <li key={item} className="current__item">
                                <span className="current__bullet">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default CurrentlyLearning;
