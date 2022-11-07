import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import { currencyFormatter } from "../utils/CurrencyFormatter";

import {
  useExpenseContext,
  ExpenseContextProp,
  ExpenseContextState,
  ACTIONS,
} from "../contexts/ExpenseContext";

import NoDataFound from "./NoDataFound";

const ExpensesList = () => {
  const { expenses, dispatch } = useExpenseContext() as ExpenseContextProp;

  const handleDelete = (id: string | undefined) => {
    if (!id) return;
    dispatch({ type: ACTIONS.DELETE, payload: id });
  };

  expenses.sort((a: ExpenseContextState, b: ExpenseContextState): number => {
    let x = new Date(b.date_modified).getTime();
    let y = new Date(a.date_modified).getTime();
    return x - y;
  });

  return (
    <>
      {expenses.length === 0 && <NoDataFound />}

      {expenses.length !== 0 && (
        <ListGroup variant="flush">
          {expenses.map((expense: ExpenseContextState) => {
            const variant = expense.isIncome ? "success" : "danger";
            const amount = expense.isIncome
              ? `+${currencyFormatter.format(expense.amount)}`
              : `-${currencyFormatter.format(expense.amount)}`;

            return (
              <ListGroup.Item
                variant={variant}
                action
                className="my-1"
                key={expense.id}
                onClick={() => handleDelete(expense.id)}
              >
                <Stack
                  direction="horizontal"
                  className="justify-content-between px-2"
                >
                  <div>{expense.description}</div>
                  <div>{amount}</div>
                </Stack>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </>
  );
};

export default ExpensesList;
