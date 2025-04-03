import { useTheme } from "../context/PortfolioThemeContext";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import pdfFile from "../assets/resume.pdf";
const About = () => {
  const { theme } = useTheme();

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex gap-6 sm:gap-8 flex-col items-center max-w-[589px]">
      <p
        className={`text-${theme}-headerText text-3xl sm:text-5xl font-semibold`}
      >
        Hi, I am <span className={`text-${theme}-primary`}>Akhil Arjun.</span>
      </p>
      <p
        className={`text-xl sm:text-2xl font-semibold text-${theme}-headerText`}
      >
        A Full Stack Developer.
      </p>
      <p className="px-6 text-center">
        A full-stack developer with expertise in both frontend and backend
        technologies, skilled in creating seamless, user-friendly applications.
      </p>
      <div className="flex gap-3 items-center">
        <button
          onClick={handleClick}
          className={`py-2 px-3 border-[1px] border-${theme}-primary text-${theme}-primary text-[15px] font-medium rounded-md transition-all duration-300 hover:bg-blue-500 hover:text-white`}
        >
          resume
        </button>
        <button>
          <GitHubIcon />
        </button>
        <button>
          <LinkedInIcon />
        </button>
      </div>
    </div>
  );
};

export default About;
