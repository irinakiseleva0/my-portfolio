import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";

function Languages({ lang }) {
    const t = {
        en: {
            title: "Languages",
            ru: "Russian — Native",
            en: "English — Fluent",
            fr: "French — Intermediate",
        },
        fr: {
            title: "Langues",
            ru: "Russe — langue maternelle",
            en: "Anglais — courant",
            fr: "Français — intermédiaire",
        },
    }[lang || "en"];

    return (
        <motion.section
            id="languages"
            className="section languages"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container">
                <motion.h2 variants={fadeInUp}>{t.title}</motion.h2>

                <motion.ul className="languages__list" variants={containerStagger}>
                    <motion.li className="languages__item" variants={fadeInUp}>
                        {t.ru}
                    </motion.li>
                    <motion.li className="languages__item" variants={fadeInUp}>
                        {t.en}
                    </motion.li>
                    <motion.li className="languages__item" variants={fadeInUp}>
                        {t.fr}
                    </motion.li>
                </motion.ul>
            </div>
        </motion.section>
    );
}

export default Languages;
