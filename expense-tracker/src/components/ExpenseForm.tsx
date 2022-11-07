import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  useExpenseContext,
  ExpenseContextProp,
  ACTIONS,
} from "../contexts/ExpenseContext";
import { useThemeContext, ThemeContextState } from "../contexts/ThemeContext";

const ExpenseForm = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [state, setState] = useState({ selectedOption: "income" });
  const { dispatch } = useExpenseContext() as ExpenseContextProp;
  const { isLightTheme, light, dark } = useThemeContext() as ThemeContextState;

  const theme = isLightTheme ? light : dark;
  const themeClass = isLightTheme ? "light" : "dark";

  const checkAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = +event.currentTarget.value;
    if (Number.isNaN(val)) return;
    setAmount(val.toString());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let amt = +amount;
    let isIncome = state.selectedOption === "income" ? true : false;

    dispatch({
      type: ACTIONS.ADD,
      payload: { description: text, amount: amt, isIncome },
    });
    setText("");
    setAmount("");
  };

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      selectedOption: event.currentTarget.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit} className={themeClass}>
      <Form.Group className="mb-3" controlId="expense-desc">
        <Form.Label>Text</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter text... "
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          required
          style={{ background: theme.ui, color: theme.syntax }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="income-or-expense">
        <Form.Check
          inline
          label="Income"
          type="radio"
          onChange={onValueChange}
          checked={state.selectedOption === "income"}
          value="income"
        />
        <Form.Check
          inline
          label="Expense"
          type="radio"
          onChange={onValueChange}
          checked={state.selectedOption === "expense"}
          value="expense"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="income-expense-amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Amount... "
          value={amount}
          onChange={checkAmount}
          required
          style={{ background: theme.ui, color: theme.syntax }}
        />
      </Form.Group>

      <Button className="w-100" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ExpenseForm;
