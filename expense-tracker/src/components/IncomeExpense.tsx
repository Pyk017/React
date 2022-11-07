import Stack from "react-bootstrap/Stack";
import { currencyFormatter } from "../utils/CurrencyFormatter";
import {
  ExpenseContextProp,
  useExpenseContext,
} from "../contexts/ExpenseContext";
import { ThemeComponentsState } from "../contexts/ThemeContext";

const IncomeExpense = ({ THEME }: { THEME: ThemeComponentsState }) => {
  const { getTotalIncome, getTotalExpenses } =
    useExpenseContext() as ExpenseContextProp;

  const totalIncome = getTotalIncome();
  const totalExpenses = getTotalExpenses();

  return (
    <div className="d-flex justify-content-center align-items-center incExpDiv mb-3">
      <Stack
        direction="horizontal"
        style={{ background: THEME.ui }}
        className="income-expense w-100"
      >
        <Stack direction="vertical" className="px-4 py-3 align-items-center">
          <div className="fs-5 fw-bold">Income</div>
          <div className="fs-5 fw-bold text-success">
            {currencyFormatter.format(totalIncome)}
          </div>
        </Stack>
        <Stack direction="vertical" className="px-4 py-3 align-items-center">
          <div className="fs-5 fw-bold">Expense</div>
          <div className="fs-5 fw-bold text-danger">
            {currencyFormatter.format(totalExpenses)}
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default IncomeExpense;
