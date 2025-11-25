import { motion } from "framer-motion";
import {
  fadeInUp,
  containerStagger,
  flipIn,
  listStagger,
} from "../animation/variants.js";

const certificates = {
  en: [
    {
      title: "IT Class & Moscow School of Programmers",
      issuer: "School No. 1799, Moscow",
      year: "2024",
      details:
        "Certificate confirming completion of the pre-professional IT Class program and studies at the Moscow School of Programmers (C++, C#, discrete maths, networks, game development basics).",
      link: "/certificates/it-class-msp.pdf",
      linkLabel: "Download PDF (EN / RU)",
    },
  ],

  fr: [
    {
      title: "Classe IT & Moscow School of Programmers",
      issuer: "École n°1799, Moscou",
      year: "2024",
      details:
        "Certificat confirmant la réussite du programme pré-professionnel « Classe IT dans l’école de Moscou » et des études à la Moscow School of Programmers (C++, C#, maths discrètes, réseaux, bases du développement de jeux).",
      link: "/certificates/it-class-msp.pdf",
      linkLabel: "Télécharger le PDF (EN / RU)",
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

        <motion.div className="certificates__grid" variants={listStagger}>
          {list.map((cert) => (
            <motion.article
              key={cert.title}
              className="certificate-card"
              variants={flipIn}
            >
              <h3>{cert.title}</h3>
              <p className="certificate-card__issuer">
                {cert.issuer} • {cert.year}
              </p>
              <p className="certificate-card__details">{cert.details}</p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-card__link"
                >
                  📄 {cert.linkLabel ||
                    (lang === "fr" ? "Télécharger le PDF" : "Download PDF")}
                </a>
              )}

            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Certificates;
