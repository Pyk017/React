import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

type dispatchType = {
  type: string;
  payload: any;
};

export interface ExpenseContextState {
  id: string;
  description: string;
  amount: number;
  isIncome: boolean;
  date_modified: Date;
}

export interface ExpenseContextProp {
  expenses: ExpenseContextState[];
  dispatch: React.Dispatch<dispatchType>;
  getTotalIncome: () => number;
  getTotalExpenses: () => number;
  getTotalAmount: () => number;
}

export const ACTIONS = {
  ADD: "add-expense",
  DELETE: "delete-expense",
};

export const ExpenseContext = createContext<ExpenseContextProp | null>(null);

export function useExpenseContext() {
  return useContext(ExpenseContext);
}

function reducer(
  state: ExpenseContextState[],
  { type, payload }: dispatchType
): ExpenseContextState[] {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...state,
        {
          id: uuidV4(),
          description: payload.description,
          amount: payload.amount,
          isIncome: payload.isIncome,
          date_modified: new Date(),
        },
      ];

    case ACTIONS.DELETE:
      return state.filter((exp: ExpenseContextState) => exp.id !== payload);

    default:
      return state;
  }
}

const ExpenseContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, setState] = useLocalStorage("EXPENSES", []);

  const [expenses, dispatch]: [
    ExpenseContextState[],
    React.Dispatch<dispatchType>
  ] = useReducer(reducer, state);

  useEffect(() => {
    setState(expenses);
  }, [expenses, setState, state]);

  const getTotalIncome = () => {
    return expenses.reduce((total: number, exp: ExpenseContextState) => {
      if (exp.isIncome) return total + exp.amount;
      return total;
    }, 0);
  };

  const getTotalExpenses = () => {
    return expenses.reduce((total: number, exp: ExpenseContextState) => {
      if (!exp.isIncome) return total + exp.amount;
      return total;
    }, 0);
  };

  const getTotalAmount = () => {
    return expenses.reduce(
      (total: number, exp: ExpenseContextState) => total + exp.amount,
      0
    );
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        dispatch,
        getTotalIncome,
        getTotalAmount,
        getTotalExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
