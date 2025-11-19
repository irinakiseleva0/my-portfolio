import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";

function Contact({ lang }) {
    const t = {
        en: {
            title: "Contact",
            intro: "Feel free to reach out to me on any of the platforms below:",
            emailLabel: "Email",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
            gitlabLabel: "GitLab (EPITA)",
        },
        fr: {
            title: "Contact",
            intro: "N’hésitez pas à me contacter via l’une des plateformes ci-dessous :",
            emailLabel: "Email",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
            gitlabLabel: "GitLab (EPITA)",
        },
    }[lang || "en"];

    return (
        <motion.section
            id="contact"
            className="section section--gray contact"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container">
                <motion.h2 variants={fadeInUp}>{t.title}</motion.h2>

                <motion.p className="contact__intro" variants={fadeInUp}>
                    {t.intro}
                </motion.p>

                <motion.ul className="contact-list" variants={containerStagger}>
                    <motion.li variants={fadeInUp}>
                        📧 {t.emailLabel}:{" "}
                        <a href="mailto:you@example.com">iriska252006@gmail.com</a>
                    </motion.li>

                    <motion.li variants={fadeInUp}>
                        🔗 {t.linkedinLabel}:{" "}
                        <a
                            href="https://www.linkedin.com/in/irina-kiseleva-092563354/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin.com/in/irina-kiseleva
                        </a>
                    </motion.li>

                    <motion.li variants={fadeInUp}>
                        🐙 {t.githubLabel}:{" "}
                        <a
                            href="https://github.com/irinakiseleva0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            github.com/irinakiseleva0
                        </a>
                    </motion.li>

                    <motion.li variants={fadeInUp}>
                        🦊 {t.gitlabLabel}:{" "}
                        <a
                            href="https://gitlab.cri.epita.fr/irina.kiseleva"
                            target="_blank"
                            rel="noreferrer"
                        >
                            gitlab.cri.epita.fr/irina.kiseleva
                        </a>
                    </motion.li>
                </motion.ul>
            </div>
        </motion.section>
    );
}

export default Contact;
