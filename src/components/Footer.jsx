// src/components/Footer.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation/variants.js";

function Footer({ lang }) {
    const [showButton, setShowButton] = useState(false);

    // показываем кнопку если скролл > 300px
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const t = {
        en: {
            made: "Made with React & Framer Motion",
            back: "Back to top",
        },
        fr: {
            made: "Réalisé avec React & Framer Motion",
            back: "Retour en haut",
        },
    }[lang || "en"];

    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__content">
                <motion.p
                    className="footer__text"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    © {year} Irina Kiseleva · {t.made}
                </motion.p>

                {/* Кнопка Back to top */}
                {showButton && (
                    <motion.button
                        className="back-to-top"
                        onClick={scrollToTop}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        ⬆ {t.back}
                    </motion.button>
                )}
            </div>
        </footer>
    );
}

export default Footer;
