import projects from "../data/projects.js";

function ProjectCard({ title, description, tech, link }) {
    return (
        <article className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>

            {tech && (
                <p className="project-card__tech">
                    <strong>Tech:</strong> {tech.join(", ")}
                </p>
            )}

            {link && (
                <a href={link} target="_blank" rel="noreferrer">
                    Open project
                </a>
            )}
        </article>
    );
}

function Projects({ refProp }) {
    return (
        <section id="projects" className="section section--gray" ref={refProp}>
            <div className="container">
                <h2>Projects</h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
