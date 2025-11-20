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
import Loader from "./components/Loader.jsx";
import Experience from "./sections/Experience.jsx";
import "./styles/global.css";


function App() {
  // refs для scrollspy
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const learningRef = useRef(null);
  const educationRef = useRef(null);
  const languagesRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);


  // активная секция
  const [activeSection, setActiveSection] = useState("hero");

  // тема + язык
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");

  // лоадер
  const [isLoading, setIsLoading] = useState(true);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // scrollspy через IntersectionObserver
  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "projects", ref: projectsRef },
      { id: "skills", ref: skillsRef },
      { id: "learning", ref: learningRef },
      { id: "experience", ref: experienceRef },   // <-- добавили
      { id: "education", ref: educationRef },
      { id: "languages", ref: languagesRef },
      { id: "certificates", ref: certificatesRef },
      { id: "contact", ref: contactRef },
    ];


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    sections.forEach((s) => {
      if (s.ref.current) observer.observe(s.ref.current);
    });

    return () => observer.disconnect();
  }, []);

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

  // таймер лоадера
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <>
      {isLoading && <Loader lang={lang} />}

      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        lang={lang}
        onLanguageChange={changeLanguage}
        onProjectsClick={scrollToProjects}
        activeSection={activeSection}
      />

      <Hero onProjectsClick={scrollToProjects} lang={lang} />
      <About lang={lang} refProp={aboutRef} />
      <Projects refProp={projectsRef} lang={lang} />
      <Skills lang={lang} refProp={skillsRef} />
      <CurrentlyLearning lang={lang} refProp={learningRef} />
      <Experience lang={lang} refProp={experienceRef} />
      <Education lang={lang} refProp={educationRef} />
      <Languages lang={lang} refProp={languagesRef} />
      <Certificates lang={lang} refProp={certificatesRef} />
      <Contact lang={lang} refProp={contactRef} />

      <Footer lang={lang} />
    </>
  );
}

export default App;
