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
    id: 3,
    featured: true,
    title: {
      en: "Cyberpunk Pac-Man",
      fr: "Cyberpunk Pac-Man",
    },
    description: {
      en: "A neon-styled arcade maze-chase game built solo with Python and raylib, featuring multiple game modes, a progression and unlockables system, a cinematic UI shell, controller support, and automated tests wired into a GitHub Actions CI pipeline.",
      fr: "Un jeu d'arcade type labyrinthe au style néon, développé en solo avec Python et raylib. Comprend plusieurs modes de jeu, un système de progression et de déblocages, une interface cinématique, le support manette, ainsi que des tests automatisés intégrés dans un pipeline CI GitHub Actions.",
    },
    tech: ["Python", "raylib", "GitHub Actions", "CI/CD"],
    link: "https://github.com/irinakiseleva0/Pacman",
  },

  {
    id: 2,
    featured: true,
    title: {
      en: "Currency Converter (Django)",
      fr: "Convertisseur de devises (Django)",
    },
    description: {
      en: "A Django web app that converts amounts between currencies using live exchange rates fetched from the exchangerate-api.com API. Includes basic user registration and login with Django's built-in auth system, deployed on Render.",
      fr: "Une application web Django qui convertit des montants entre devises en utilisant des taux de change en temps réel récupérés depuis l'API exchangerate-api.com. Comprend une inscription et une connexion utilisateur basiques via le système d'authentification intégré de Django, déployée sur Render.",
    },
    tech: ["Python", "Django", "REST API", "HTML", "CSS", "Render"],
    link: "https://converter-v2.onrender.com/converter/",
    note:
      "⚠️ First load may take ~30s (free hosting).",
  },


];

export default projects;
