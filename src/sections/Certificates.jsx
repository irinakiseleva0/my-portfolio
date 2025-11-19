import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";

const certificates = {
    en: [
        {
            title: "Certificate title",
            issuer: "Platform / Organization",
            year: "2024",
            details: "Short description of what you learned or the main topics covered.",
        },
    ],
    fr: [
        {
            title: "Titre du certificat",
            issuer: "Plateforme / Organisation",
            year: "2024",
            details:
                "Brève description de ce que vous avez appris ou des sujets principaux.",
        },
    ],
};

function Certificates({ lang }) {
    const t = {
        en: { title: "Certificates" },
        fr: { title: "Certificats" },
    }[lang || "en"];

    const list = certificates[lang] || certificates.en;

    return (
        <motion.section
            id="certificates"
            className="section certificates"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container">
                <motion.h2 variants={fadeInUp}>{t.title}</motion.h2>

                <motion.div
                    className="certificates__grid"
                    variants={containerStagger}
                >
                    {list.map((cert) => (
                        <motion.article
                            key={cert.title}
                            className="certificate-card"
                            variants={fadeInUp}
                        >
                            <h3>{cert.title}</h3>
                            <p className="certificate-card__issuer">
                                {cert.issuer} • {cert.year}
                            </p>
                            <p className="certificate-card__details">{cert.details}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Certificates;
