import { createContext, PropsWithChildren, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

export interface BudgetContextState {
  id: string | number;
  name: string;
  max: number;
}

export interface ExpenseContextState {
  id: string | number;
  budgetId: string | number;
  amount: number;
  description: string;
}

export interface BudgetExpenseState {
  budgets: BudgetContextState[];
  expenses: ExpenseContextState[];
  getBudgetExpenses: (budgetId: string | number) => ExpenseContextState[];
  addBudget: (x: any) => void;
  addExpenses: (x: any) => void;
  deleteExpense: (x: any) => void;
  deleteBudget: (x: any) => void;
}

export const BudgetsContext = createContext<BudgetExpenseState | null>(null);

export function useBudgets() {
  return useContext(BudgetsContext);
}

const BudgetContextProvider = ({ children }: PropsWithChildren) => {
  const [budgets, setBudgets] = useLocalStorage("BUDGETS", []);
  const [expenses, setExpenses] = useLocalStorage("EXPENSES", []);

  function getBudgetExpenses(budgetId: string | number): ExpenseContextState[] {
    return expenses.filter((expense: any) => expense.budgetId === budgetId);
  }

  function addBudget({ name, max }: any): void {
    setBudgets((prevBudgets: any) => {
      if (prevBudgets.find((budget: any) => budget.name === name))
        return prevBudgets;

      return [
        ...prevBudgets,
        {
          id: uuidV4(),
          name,
          max,
        },
      ];
    });
  }

  function deleteBudget({ id }: any): void {
    setExpenses((prevExpenses: any) => {
      return prevExpenses.map((expense: any) => {
        if (expense.budgetId !== id) return expense;

        return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
      });
    });

    setBudgets((prevBudgets: any) => {
      return prevBudgets.filter((budget: any) => budget.id !== id);
    });
  }

  function addExpenses({ amount, description, budgetId }: any): void {
    setExpenses((prevExpenses: any) => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }];
    });
  }

  function deleteExpense({ id }: any): void {
    setExpenses((prevExpenses: any) => {
      return prevExpenses.filter((expense: any) => expense.id !== id);
    });
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        addBudget,
        deleteBudget,
        getBudgetExpenses,
        expenses,
        addExpenses,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};

export default BudgetContextProvider;
