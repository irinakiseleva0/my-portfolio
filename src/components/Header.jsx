
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

function Header({ theme, onToggleTheme, onProjectsClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const handleNavClick = () => setIsOpen(false);

    const handleProjectsClick = () => {
        onProjectsClick?.();
        setIsOpen(false);
    };

    return (
        <motion.header
            className="header"
            variants={containerStagger}
            initial="hidden"
            animate="visible"
        >
            <div className="container header__content">
                <motion.div className="header__logo" variants={fadeInUp}>
                    Irina Kiseleva
                </motion.div>

                {/* DESKTOP NAV */}
                <motion.nav className="nav" variants={fadeInUp}>
                    <a href="#about" onClick={handleNavClick}>
                        About
                    </a>
                    <button className="nav__btn" onClick={handleProjectsClick}>
                        Projects
                    </button>
                    <a href="#skills" onClick={handleNavClick}>
                        Skills
                    </a>
                    <a href="#contact" onClick={handleNavClick}>
                        Contact
                    </a>
                </motion.nav>

                <div className="header__right">
                    {/* THEME TOGGLE */}
                    <motion.button
                        className="theme-toggle"
                        onClick={onToggleTheme}
                        variants={fadeInUp}
                    >
                        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                    </motion.button>

                    {/* BURGER (only on mobile) */}
                    <button
                        className={`header__burger ${isOpen ? "header__burger--open" : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            {/* MOBILE NAV */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="mobile-nav"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <a href="#about" onClick={handleNavClick}>
                            About
                        </a>
                        <button className="mobile-nav__btn" onClick={handleProjectsClick}>
                            Projects
                        </button>
                        <a href="#skills" onClick={handleNavClick}>
                            Skills
                        </a>
                        <a href="#contact" onClick={handleNavClick}>
                            Contact
                        </a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;
