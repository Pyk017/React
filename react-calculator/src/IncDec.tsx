import { useReducer } from "react";

interface countState {
  count: number;
}

interface typeType {
  type: string;
}

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state: countState, action: typeType) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const IncDec = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => dispatch({ type: ACTIONS.INCREMENT });

  const decrement = () => dispatch({ type: ACTIONS.DECREMENT });

  return (
    <>
      <button className="btn btn-primary mx-2" onClick={decrement}>
        -
      </button>
      <span>{state.count}</span>
      <button className="btn btn-secondary mx-2" onClick={increment}>
        +
      </button>
    </>
  );
};

export default IncDec;
