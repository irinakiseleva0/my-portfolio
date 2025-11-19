import { useRef, useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Education from "./sections/Education.jsx";
import Languages from "./sections/Languages.jsx";
import Certificates from "./sections/Certificates.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CurrentlyLearning from "./sections/CurrentlyLearning.jsx";
import "./styles/global.css";

function App() {
  const projectsRef = useRef(null);

  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en"); // "en" или "fr"

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // читаем тему и язык из localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("lang");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
    if (savedLang === "en" || savedLang === "fr") {
      setLang(savedLang);
    }
  }, []);

  // вешаем тему на body и сохраняем
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // сохраняем выбранный язык
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onProjectsClick={scrollToProjects}
        lang={lang}
        onLanguageChange={changeLanguage}
      />

      <Hero onProjectsClick={scrollToProjects} lang={lang} />
      <About lang={lang} />
      <Projects refProp={projectsRef} lang={lang} />
      <Skills lang={lang} />
      <CurrentlyLearning lang={lang} />
      <Education lang={lang} />
      <Languages lang={lang} />
      <Certificates lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />


    </>
  );
}

export default App;
