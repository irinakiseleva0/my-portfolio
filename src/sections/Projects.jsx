// src/sections/Projects.jsx
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
      whileHover={{
        y: -6,
        rotateX: 4,
        rotateY: -4,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
    >
      <div className="project-card__inner">
        <header className="project-card__header">
          <h3 className="project-card__title">{title}</h3>

          {project.featured && (
            <span className="project-card__badge">
              {lang === "fr" ? "En vedette" : "Featured"}
            </span>
          )}
        </header>

        <p className="project-card__description">{desc}</p>

        {project.tech && project.tech.length > 0 && (
          <div className="project-card__tech">
            {project.tech.map((t) => (
              <span key={t} className="project-tech-chip">
                {t}
              </span>
            ))}
          </div>
        )}

        {project.link && (
          <footer className="project-card__footer">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card__link"
            >
              {buttonLabel} <span className="project-card__external">↗</span>
            </a>

            {project.note && (
              <small className="project-note">{project.note}</small>
            )}
          </footer>
        )}
      </div>
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
