import { useTheme } from "../context/PortfolioThemeContext";
import {
  ModeNight as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";

const sections = ["projects", "skills", "contact"];

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex justify-between items-center">
      <p className={`text-${theme}-primary text-2xl font-bold`}>AA.</p>
      <div className="flex gap-2 items-center">
        {sections.map((section) => (
          <a href={"#" + section} key={section} className={`text-[15px]`}>
            {section}
          </a>
        ))}
        <button className={`text-${theme}-primary pb-1`} onClick={toggleTheme}>
          {theme === "light" ? (
            <DarkModeIcon style={{ fontSize: "20px" }} />
          ) : (
            <LightModeIcon
              className={`text-${theme}-headerText`}
              style={{ fontSize: "20px" }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
