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
    featured: true,
    title: {
      en: "Online File Converter (Django)",
      fr: "Convertisseur de fichiers en ligne (Django)",
    },
    description: {
      en: "A Django-based web application that allows users to upload a file and convert it between formats (PDF, JPG, PNG). Includes server-side validation and dynamic file processing, deployed on Render.",
      fr: "Une application web Django permettant de téléverser un fichier et de le convertir entre plusieurs formats (PDF, JPG, PNG). Avec validation côté serveur et traitement dynamique des fichiers, déployée sur Render.",
    },
    tech: ["Python", "Django", "Pillow", "HTML", "CSS", "Render"],
    link: "https://converter-v2.onrender.com/converter/",
    note:
      "⚠️ First load may take ~30s (free hosting).",
  },


];

export default projects;
