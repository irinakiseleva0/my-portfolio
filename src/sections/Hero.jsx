import profile from "../assets/profile.jpg";

function Hero({ onProjectsClick }) {
    return (
        <section className="hero">
            <div className="container hero__content">

                {/* LEFT TEXT SIDE */}
                <div className="hero__text">
                    <h1 className="hero__title">
                        Hello, I'm <span className="highlight">Irina</span>
                    </h1>

                    <p className="hero__subtitle">
                        2nd-year Computer Science student at <strong>EPITA</strong><br />
                        Frontend Developer • React Enthusiast
                    </p>

                    <p className="hero__description">
                        I enjoy building clean, modern user interfaces and learning new
                        technologies every day. Currently focusing on React, UI/UX design,
                        and improving my software engineering skills.
                    </p>

                    <div className="hero__buttons">
                        <button className="btn-primary" onClick={onProjectsClick}>
                            View My Projects
                        </button>

                        <a href="#contact" className="btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* RIGHT PHOTO SIDE */}
                <img
                    src={profile}
                    alt="Profile"
                    className="hero__photo"
                />
            </div>
        </section>
    );
}

export default Hero;
