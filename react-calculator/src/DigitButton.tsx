import { ACTIONS } from "./App";

const DigitButton = ({ dispatch, digit }: any) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGITS, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
