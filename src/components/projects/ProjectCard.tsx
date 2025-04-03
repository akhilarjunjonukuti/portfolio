import {
  // GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from "@mui/icons-material";
import { useTheme } from "../../context/PortfolioThemeContext";

const truncate = (str: string, n: number = 100) => {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
};

const ProjectCard = ({ project }: any) => {
  const { name, description, stack, links } = project;
  const { theme } = useTheme();
  return (
    <div className="py-6 px-10 flex flex-col gap-3 items-center shadow-[rgba(0,0,0,0.2)_0px_12px_28px_0px,rgba(0,0,0,0.1)_0px_2px_4px_0px,rgba(255,255,255,0.05)_0px_0px_0px_1px_inset] rounded-lg">
      <p
        className={`text-${theme}-headerText text-xl sm:text-2xl font-semibold`}
      >
        {name}
      </p>
      <p className="text-[14px] text-center">{truncate(description)}</p>
      <div className="flex gap-3 items-center text-xs flex-wrap">
        {stack.map((item: string) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        {/* <button>
          <GitHubIcon />
        </button> */}
        <button onClick={() => window.open(links.preview, "_blank")}>
          <LaunchIcon />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
