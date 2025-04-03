import { PortfolioThemeProvider } from "./context/PortfolioThemeContext";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <PortfolioThemeProvider>
      <Portfolio />
    </PortfolioThemeProvider>
  );
};

export default App;
