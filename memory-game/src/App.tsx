import Header from "./components/Header";
import { useThemeContext, ThemeContextProps } from "./contexts/ThemeContext";

function App() {
  const { isLightTheme, dark, light } = useThemeContext() as ThemeContextProps;
  const theme = isLightTheme ? light : dark;

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
