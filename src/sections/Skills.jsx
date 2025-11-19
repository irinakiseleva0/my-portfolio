import skills from "../data/skills.js";

function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2>Skills</h2>
                <p className="skills__intro">
                    Here are some of the technologies and tools I’ve been working with:
                </p>

                <ul className="skills-list">
                    {skills.map((skill) => (
                        <li key={skill} className="skills-list__item">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills;
