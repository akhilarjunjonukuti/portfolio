import { createContext, useState, useContext, ReactNode } from "react";

interface IPortfolioTheme {
  theme: string;
  toggleTheme: () => void;
}

const PortfolioThemeContext = createContext<IPortfolioTheme | undefined>(
  undefined
);

export const PortfolioThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState("light");

  const toggle: Record<string, string> = { light: "dark", dark: "light" };

  const toggleTheme = () => {
    setTheme(toggle[theme]);
  };

  return (
    <PortfolioThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </PortfolioThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): IPortfolioTheme => {
  const context = useContext(PortfolioThemeContext);
  if (!context) {
    throw new Error("Error in useTheme");
  }
  return context;
};
