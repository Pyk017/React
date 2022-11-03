import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetContext";
import BudgetCard from "./BudgetCard";

const UncategorizedBudgetCard = (props: any) => {
  const { getBudgetExpenses }: any = useBudgets();

  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total: any, expense: any) => total + expense.amount,
    0
  );

  if (amount === 0) return null;

  return <BudgetCard {...props} name="Uncategorized" gray amount={amount} />;
};

export default UncategorizedBudgetCard;
