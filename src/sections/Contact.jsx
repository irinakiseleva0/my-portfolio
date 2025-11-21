// src/sections/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";

function Contact({ lang, refProp }) {
    const t = {
        en: {
            title: "Contact",
            intro:
                "Feel free to reach out if you’d like to talk about projects, internships or anything tech-related.",
            formName: "Your name",
            formEmail: "Your email",
            formMessage: "Your message",
            formButton: "Send message",
            sending: "Sending...",
            success: "Thank you! Your message has been sent.",
            error: "Oops! Something went wrong. Please try again.",
            socialTitle: "Or find me here",
        },
        fr: {
            title: "Contact",
            intro:
                "N’hésitez pas à me contacter pour discuter de projets, de stages ou de sujets liés à l’informatique.",
            formName: "Votre nom",
            formEmail: "Votre e-mail",
            formMessage: "Votre message",
            formButton: "Envoyer le message",
            sending: "Envoi en cours...",
            success: "Merci ! Votre message a bien été envoyé.",
            error:
                "Oups ! Une erreur s’est produite. Veuillez réessayer plus tard.",
            socialTitle: "Ou contactez-moi ici",
        },
    }[lang || "en"];

    // поля формы – совпадают с {{name}}, {{email}}, {{message}} в шаблоне EmailJS
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState({ type: "", message: "" });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setStatus({ type: "", message: "" });
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                type: "error",
                message:
                    lang === "fr"
                        ? "Veuillez remplir tous les champs."
                        : "Please fill in all fields.",
            });
            return;
        }

        setIsSending(true);
        setStatus({ type: "", message: "" });

        try {
            const SERVICE_ID = "service_irina";
            const TEMPLATE_ID = "template_irina";
            const PUBLIC_KEY = "sQB5DbTP_FCsXBPzV";

            const response = await fetch(
                "https://api.emailjs.com/api/v1.0/email/send",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        service_id: SERVICE_ID,
                        template_id: TEMPLATE_ID,
                        user_id: PUBLIC_KEY,
                        template_params: {
                            name: formData.name,
                            email: formData.email,
                            message: formData.message,
                            time: new Date().toLocaleString(),
                            title:
                                lang === "fr"
                                    ? "Message depuis le portfolio"
                                    : "Message from portfolio",
                        },
                    }),
                }
            );

            if (response.ok) {
                setStatus({ type: "success", message: t.success });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus({ type: "error", message: t.error });
            }
        } catch (err) {
            setStatus({ type: "error", message: t.error });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <motion.section
            id="contact"
            ref={refProp}
            className="section contact"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            <div className="container contact__content">
                {/* Левая колонка: текст + ссылки */}
                <motion.div className="contact__info" variants={fadeInUp}>
                    <h2>{t.title}</h2>
                    <p>{t.intro}</p>

                    <h3 className="contact__subtitle">{t.socialTitle}</h3>
                    <ul className="contact__links">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/irina-kiseleva-092563354/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/irinakiseleva0"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://gitlab.cri.epita.fr/irina.kiseleva"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitLab
                            </a>
                        </li>
                    </ul>
                </motion.div>

                {/* Правая колонка: карточка-форма */}
                <motion.form
                    className="contact__form"
                    onSubmit={handleSubmit}
                    variants={fadeInUp}
                >
                    <div className="contact__field">
                        <label htmlFor="name">{t.formName}</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Irina"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="contact__field">
                        <label htmlFor="email">{t.formEmail}</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="contact__field">
                        <label htmlFor="message">{t.formMessage}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder={
                                lang === "fr"
                                    ? "Écrivez votre message ici..."
                                    : "Write your message here..."
                            }
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    {status.message && (
                        <p
                            className={
                                status.type === "success"
                                    ? "contact__status contact__status--success"
                                    : "contact__status contact__status--error"
                            }
                        >
                            {status.message}
                        </p>
                    )}

                    <button type="submit" className="btn-primary" disabled={isSending}>
                        {isSending ? t.sending : t.formButton}
                    </button>
                </motion.form>
            </div>
        </motion.section>
    );
}

export default Contact;
