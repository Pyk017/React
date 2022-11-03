import { useBudgets } from "../contexts/BudgetContext";
import BudgetCard from "./BudgetCard";

const TotalBudgetCard = () => {
  const { expenses, budgets }: any = useBudgets();

  const amount = expenses.reduce(
    (total: any, expense: any) => total + expense.amount,
    0
  );
  const max = budgets.reduce(
    (total: any, budget: any) => total + budget.max,
    0
  );

  if (max === 0) return null;

  return <BudgetCard max={max} name="Total" gray amount={amount} hideButtons />;
};

export default TotalBudgetCard;
