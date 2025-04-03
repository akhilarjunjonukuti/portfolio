// import { useEffect } from "react";
import About from "../components/About";
import NavBar from "../components/NavBar";
import { Contact } from "../components/projects/Contact";
import Projects from "../components/projects/Projects";
import Skills from "../components/Skills";
import { useTheme } from "../context/PortfolioThemeContext";

const Portfolio = () => {
  const { theme } = useTheme();
  //   useEffect(() => {
  //     document.body.classList.toggle("dark", theme === "dark");
  //   }, [theme]);
  return (
    <div
      className={`bg-${theme}-background min-h-[100vh] text-${theme}-textPrimary font-poppins `}
    >
      <div className="max-w-[900px] mx-auto my-0 p-[20px] ">
        <NavBar />
        <div className="flex flex-col gap-14 pt-16 items-center">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
