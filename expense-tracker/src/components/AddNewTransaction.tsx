import Stack from "react-bootstrap/Stack";
import { useThemeContext, ThemeContextState } from "../contexts/ThemeContext";
import ExpenseForm from "./ExpenseForm";

const AddNewTransaction = () => {
  const { isLightTheme } = useThemeContext() as ThemeContextState;

  const classes = `fs-4 fw-bold py-2 ${
    isLightTheme ? "lighttheme-border-bottom" : "darktheme-border-bottom"
  }`;

  return (
    <Stack className="add-Trans mx-auto">
      <h4 className={classes}>Add New Transaction</h4>
      <ExpenseForm />
    </Stack>
  );
};

export default AddNewTransaction;
