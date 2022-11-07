import Stack from "react-bootstrap/Stack";
import ExpensesList from "./ExpensesList";
import { useThemeContext, ThemeContextState } from "../contexts/ThemeContext";

const History = () => {
  const { isLightTheme } = useThemeContext() as ThemeContextState;

  const classes = `fs-4 fw-bold py-2 ${
    isLightTheme ? "lighttheme-border-bottom" : "darktheme-border-bottom"
  }`;

  return (
    <Stack className="historyDiv mx-auto mb-3">
      <h4 className={classes}>History</h4>
      <ExpensesList />
    </Stack>
  );
};

export default History;
