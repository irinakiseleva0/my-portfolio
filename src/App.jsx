import { useRef, useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import "./styles/global.css";

function App() {
  const projectsRef = useRef(null);
  const [theme, setTheme] = useState("light");

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onProjectsClick={scrollToProjects}
      />

      <Hero onProjectsClick={scrollToProjects} />
      <About />
      <Projects refProp={projectsRef} />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
