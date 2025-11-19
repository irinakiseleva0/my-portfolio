// src/components/Header.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { containerStagger, fadeInUp } from "../animation/variants.js";

const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.2, ease: "easeIn" },
    },
};

function Header({ theme, onToggleTheme, lang, onLanguageChange, onProjectsClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    const handleProjectsClick = () => {
        onProjectsClick?.();
        closeMenu();
    };

    /* Переводы пунктов меню */
    const labels = {
        about: lang === "en" ? "About" : "À propos",
        projects: lang === "en" ? "Projects" : "Projets",
        skills: lang === "en" ? "Skills" : "Compétences",
        contact: lang === "en" ? "Contact" : "Contact",
    };

    return (
        <motion.header
            className="header"
            variants={containerStagger}
            initial="hidden"
            animate="visible"
        >
            <div className="container header__content">

                {/* LOGO */}
                <motion.div className="header__logo" variants={fadeInUp}>
                    Irina Kiseleva
                </motion.div>

                {/* DESKTOP NAV */}
                <motion.nav className="nav" variants={fadeInUp}>
                    <a href="#about" onClick={closeMenu}>{labels.about}</a>
                    <button className="nav__btn" onClick={handleProjectsClick}>{labels.projects}</button>
                    <a href="#skills" onClick={closeMenu}>{labels.skills}</a>
                    <a href="#contact" onClick={closeMenu}>{labels.contact}</a>
                </motion.nav>

                {/* RIGHT SIDE */}
                <div className="header__right">

                    {/* === LANGUAGE SELECTOR WITH FLAGS === */}
                    <div className="flags">
                        <button
                            className={`flag-btn ${lang === "en" ? "flag-active" : ""}`}
                            onClick={() => onLanguageChange("en")}
                            aria-label="Switch to English"
                        >
                            <span className="flag-emoji">GB</span>
                            <span className="flag-label">EN</span>
                        </button>

                        <button
                            className={`flag-btn ${lang === "fr" ? "flag-active" : ""}`}
                            onClick={() => onLanguageChange("fr")}
                            aria-label="Passer en français"
                        >
                            <span className="flag-emoji">FR</span>
                            <span className="flag-label">FR</span>
                        </button>
                    </div>


                    {/* THEME SWITCH */}
                    <motion.button
                        className="theme-toggle"
                        onClick={onToggleTheme}
                        variants={fadeInUp}
                    >
                        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                    </motion.button>

                    {/* BURGER BUTTON */}
                    <button
                        className={`header__burger ${isOpen ? "header__burger--open" : ""}`}
                        onClick={toggleMenu}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            {/* MOBILE NAV DROPDOWN */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="mobile-nav"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <a href="#about" onClick={closeMenu}>{labels.about}</a>
                        <button className="mobile-nav__btn" onClick={handleProjectsClick}>{labels.projects}</button>
                        <a href="#skills" onClick={closeMenu}>{labels.skills}</a>
                        <a href="#contact" onClick={closeMenu}>{labels.contact}</a>
                    </motion.nav>
                )}
            </AnimatePresence>

        </motion.header>
    );
}

export default Header;
