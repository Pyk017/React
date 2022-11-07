import AddNewTransaction from "./components/AddNewTransaction";
import Header from "./components/Header";
import History from "./components/History";
import IncomeExpense from "./components/IncomeExpense";
import YourBalance from "./components/YourBalance";
import ExpenseContextProvider from "./contexts/ExpenseContext";
import { ThemeContextProps, useThemeContext } from "./contexts/ThemeContext";

function App() {
  const { isLightTheme, dark, light, toggleTheme } =
    useThemeContext() as ThemeContextProps;

  const THEME = isLightTheme ? light : dark;

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column p-4"
      style={{
        background: THEME.background,
        color: THEME.syntax,
      }}
    >
      <Header toggleTheme={toggleTheme} />
      <ExpenseContextProvider>
        <YourBalance isLightTheme={isLightTheme} />
        <IncomeExpense THEME={{ ...THEME }} />
        <History />
        <AddNewTransaction />
      </ExpenseContextProvider>
    </div>
  );
}

export default App;
