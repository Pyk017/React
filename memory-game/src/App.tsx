import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import { useThemeContext, ThemeContextProps } from "./contexts/ThemeContext";
import { useState } from "react";

function App() {
  const { isLightTheme, dark, light } = useThemeContext() as ThemeContextProps;
  const theme = isLightTheme ? light : dark;

  const [turns, setTurns] = useState<number>(0);

  console.log("theme :>> ", theme);
  console.log("turns :>> ", turns);

  return (
    <div className="App container-fluid mx-auto d-flex flex-column align-items-center gap-3 py-3">
      <Header />
      <CardGrid setTurns={setTurns} />
      <Footer turns={turns} />
    </div>
  );
}

export default App;
