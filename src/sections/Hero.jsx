import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";
// если используешь public/profile.jpg:
// const profile = "/profile.jpg";
import profile from "../assets/profile.jpg";

function Hero({ onProjectsClick, lang }) {
    const t = {
        en: {
            title: "Hello, I'm ",
            subtitleLine1: "2nd-year Computer Science student at EPITA",
            subtitleLine2: "Software Developer",
            description:
                "I enjoy learning by building real projects and improving my programming skills. Right now I'm focusing on C, Python, JavaScript and React, as well as core computer science fundamentals.",
            btnProjects: "View My Projects",
            btnContact: "Contact Me",
            cvEn: "Download CV (EN)",
            cvFr: "Download CV (FR)",
        },
        fr: {
            title: "Bonjour, je suis ",
            subtitleLine1: "Étudiante en 2ᵉ année d’informatique à EPITA",
            subtitleLine2: "Développeuse logiciel",
            description:
                "J’aime apprendre en réalisant des projets concrets et en améliorant mes compétences en programmation. En ce moment, je me concentre sur C, Python, JavaScript, React et les bases de l’informatique.",
            btnProjects: "Voir mes projets",
            btnContact: "Me contacter",
            cvEn: "Télécharger le CV (EN)",
            cvFr: "Télécharger le CV (FR)",
        },
    }[lang || "en"];


    return (
        <motion.section
            className="hero"
            variants={containerStagger}
            initial="hidden"
            animate="visible"
        >
            <div className="container hero__content">
                {/* LEFT TEXT SIDE */}
                <motion.div className="hero__text" variants={fadeInUp}>
                    <h1 className="hero__title">
                        {t.title}
                        <span className="highlight">Irina Kiseleva</span>
                    </h1>

                    <p className="hero__subtitle">
                        {t.subtitleLine1}
                        <br />
                        {t.subtitleLine2}
                    </p>

                    <p className="hero__description">{t.description}</p>

                    <div className="hero__buttons">
                        <button className="btn-primary" onClick={onProjectsClick}>
                            {t.btnProjects}
                        </button>

                        <a href="#contact" className="btn-secondary">
                            {t.btnContact}
                        </a>
                    </div>
                    <div className="hero__cv-links">
                        <a href="/cv-en.pdf" className="cv-link" download>
                            <span className="cv-flag">EN</span>
                            <span className="cv-label">{t.cvEn}</span>
                        </a>

                        <a href="/cv-fr.pdf" className="cv-link" download>
                            <span className="cv-flag">FR</span>
                            <span className="cv-label">{t.cvFr}</span>
                        </a>
                    </div>


                </motion.div>

                {/* RIGHT PHOTO SIDE */}
                <motion.img
                    src={profile}
                    alt="Profile"
                    className="hero__photo"
                    variants={fadeInUp}
                />
            </div>
        </motion.section>
    );
}

export default Hero;
