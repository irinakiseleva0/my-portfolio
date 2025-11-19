import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";

function CurrentlyLearning({ lang }) {
    const t = {
        en: {
            title: "Currently learning",
            subtitle:
                "Here are some of the topics and technologies I’m actively exploring right now:",
            items: [
                "Improving my React and modern JavaScript skills",
                "Writing cleaner and more maintainable code in C and Python",
                "Getting more comfortable with Git/GitHub/GitLab workflows",
                "Understanding computer science fundamentals more deeply",
                "Practicing English and French in technical contexts",
            ],
        },
        fr: {
            title: "En ce moment j’apprends",
            subtitle:
                "Voici quelques sujets et technologies que j’explore activement en ce moment :",
            items: [
                "Améliorer mes compétences en React et JavaScript moderne",
                "Écrire un code plus clair et maintenable en C et Python",
                "Être plus à l’aise avec les workflows Git / GitHub / GitLab",
                "Approfondir les bases théoriques de l’informatique",
                "Pratiquer l’anglais et le français dans un contexte technique",
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
