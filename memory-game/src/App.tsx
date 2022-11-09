import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import { useThemeContext, ThemeContextProps } from "./contexts/ThemeContext";
import { useState } from "react";
// import { cardType } from "./utils/CardData";

function App() {
  const { isLightTheme, dark, light } = useThemeContext() as ThemeContextProps;
  const theme = isLightTheme ? light : dark;

  // const [cards, setCards] = useState<cardType[]>([]);

  return (
    <div className="App container-fluid mx-auto d-flex flex-column align-items-center gap-3 py-3">
      <Header />
      <CardGrid />
    </div>
  );
}

export default App;
