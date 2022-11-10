import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import { useThemeContext, ThemeContextProps } from "./contexts/ThemeContext";
import { useState } from "react";

function App() {
  const { isLightTheme, dark, light } = useThemeContext() as ThemeContextProps;
  const theme = isLightTheme ? light : dark;
  const [turns, setTurns] = useState<number>(0);

  return (
    <div
      className="App container-fluid mx-auto d-flex flex-column align-items-center gap-3 py-3"
      style={{
        background: theme.bg,
        color: theme.syntax,
      }}
    >
      <Header setTurns={setTurns} turns={turns} />
      <CardGrid setTurns={setTurns} />
    </div>
  );
}

export default App;
