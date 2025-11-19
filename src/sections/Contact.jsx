function Contact() {
    return (
        <section id="contact" className="section section--gray contact">
            <div className="container">
                <h2>Contact</h2>

                <p className="contact__intro">
                    Feel free to reach out to me on any of the platforms below:
                </p>

                <ul className="contact-list">
                    <li>
                        📧 Email:{" "}
                        <a href="mailto:you@example.com">
                            you@example.com
                        </a>
                    </li>

                    <li>
                        🔗 LinkedIn:{" "}
                        <a
                            href="https://www.linkedin.com/in/irina-kiseleva-092563354/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin.com/in/irina-kiseleva
                        </a>
                    </li>

                    <li>
                        🐙 GitHub:{" "}
                        <a
                            href="https://github.com/irinakiseleva0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            github.com/irinakiseleva0
                        </a>
                    </li>

                    <li>
                        🦊 GitLab (EPITA):{" "}
                        <a
                            href="https://gitlab.cri.epita.fr/irina.kiseleva"
                            target="_blank"
                            rel="noreferrer"
                        >
                            gitlab.cri.epita.fr/irina.kiseleva
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;
