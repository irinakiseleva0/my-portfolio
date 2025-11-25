// src/data/projects.js

const projects = [
  {
    id: 1,
    title: {
      en: "Portfolio Website",
      fr: "Site portfolio",
    },
    description: {
      en: "A personal portfolio built with React and Vite to showcase my projects, skills and experience as a 2nd-year CS student at EPITA.",
      fr: "Un portfolio personnel développé avec React et Vite pour présenter mes projets, compétences et expérience en tant qu’étudiante en 2ᵉ année à l’EPITA.",
    },
    tech: ["React", "Vite", "CSS", "Framer Motion"],
    link: "https://my-portfolio-rosy-iota-74.vercel.app",
  },

  {
    id: 2,
    title: {
      en: "Online File Converter (Django + React)",
      fr: "Convertisseur de fichiers en ligne (Django + React)",
    },
    description: {
      en: "A full-stack project originally built with Django and later extended with a modern React frontend. The app allows users to convert files and values in real time, with server-side processing and a clean UI.",
      fr: "Un projet full-stack initialement créé avec Django puis enrichi d’un frontend en React. L’application permet de convertir des fichiers et des valeurs en temps réel, avec un traitement côté serveur et une interface claire.",
    },
    tech: ["Python", "Django", "React", "Pillow", "JavaScript", "CSS", "Render"],
    link: "https://converter-v2.onrender.com/converter/",
    note: "⚠️ First load may take ~30s (free hosting)."
  },

];

export default projects;
