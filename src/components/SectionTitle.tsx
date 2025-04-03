import { useTheme } from "../context/PortfolioThemeContext";

const SectionTitle = ({ title }: { title: string }) => {
  const { theme } = useTheme();
  return (
    <p
      className={`text-${theme}-headerText font-semibold text-xl sm:text-2xl text-center`}
    >
      {title}
    </p>
  );
};

export default SectionTitle;
