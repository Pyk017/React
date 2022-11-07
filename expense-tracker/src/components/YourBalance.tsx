import Stack from "react-bootstrap/Stack";
import {
  useExpenseContext,
  ExpenseContextProp,
} from "../contexts/ExpenseContext";
import { currencyFormatter } from "../utils/CurrencyFormatter";

const YourBalance = ({ isLightTheme }: { isLightTheme: boolean }) => {
  const { getTotalAmount } = useExpenseContext() as ExpenseContextProp;
  const amount = getTotalAmount();

  const headingClasses = isLightTheme
    ? `fs-4 fw-bold text-primary`
    : `fs-4 fw-bold text-warning`;

  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="justify-content-center mb-3"
    >
      <h3 className="fs-4 fw-normal">Your Balance :</h3>
      <h3 className={headingClasses}>{currencyFormatter.format(amount)}</h3>
    </Stack>
  );
};

export default YourBalance;
