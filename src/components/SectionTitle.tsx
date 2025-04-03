import { useTheme } from "../context/PortfolioThemeContext";

const SectionTitle = ({ title }: { title: string }) => {
  const { theme } = useTheme();
  return (
    <p
      className={`text-${theme}-headerText font-semibold text-2xl sm:text-3xl text-center`}
    >
      {title}
    </p>
  );
};

export default SectionTitle;
