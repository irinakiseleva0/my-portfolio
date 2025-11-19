function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__content">
        <div className="about__text">
          <h2>About Me</h2>
          <p>
            I'm a 2nd-year Computer Science student at <strong>EPITA</strong> with a strong
            interest in frontend development and modern web technologies.
          </p>
          <p>
            I enjoy learning by building real projects, experimenting with design,
            and improving my skills in JavaScript, React, and UI/UX.
          </p>
        </div>

        <div className="about__details">
          <h3>Quick facts</h3>
          <ul>
            <li>🎓 2nd-year CS student at EPITA</li>
            <li>💻 Interested in frontend & React</li>
            <li>🌍 Comfortable working in English & French</li>
            <li>🚀 Always learning and exploring new tools</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
