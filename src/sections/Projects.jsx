import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../animation/variants.js";
import projects from "../data/projects.js";

function ProjectCard({ project, lang }) {
  const title = project.title[lang] || project.title.en;
  const desc = project.description[lang] || project.description.en;

  const buttonLabel = lang === "en" ? "Open project" : "Ouvrir le projet";

  return (
    <motion.article
      className="project-card"
      variants={fadeInUp}
      whileHover={{ y: -6 }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>

      {project.tech && (
        <p className="project-card__tech">
          <strong>Tech:</strong> {project.tech.join(", ")}
        </p>
      )}

      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          {buttonLabel}
        </a>
      )}
    </motion.article>
  );
}

function Projects({ refProp, lang }) {
  const t = {
    en: { title: "Projects" },
    fr: { title: "Projets" },
  }[lang || "en"];

  return (
    <motion.section
      id="projects"
      className="section section--gray"
      ref={refProp}
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h2>{t.title}</h2>

        <motion.div className="projects-grid" variants={containerStagger}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
