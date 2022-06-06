import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  //? Applying function to useState enable it to run for once only not everytime component renders.
    const [count, setCount] = useState(() => {
      return 0;
    });
//   const [state, setState] = useState({ count: 0, theme: "blue" });
//   const count = state.count;
//   const theme = state.theme;

  const navigate = useNavigate();

  const handleClick = (flag) => {
    if (flag) {
      //? prevCount is used when we are using the previous state
        setCount((prevCount) => prevCount + 1);
    //   setState(() => ({ ...state, count: count + 1 }));
      // setCount((prevCount) => prevCount + 1);
    } else {
        setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="counter">
        <button onClick={() => handleClick(false)}>-</button>
        <span>{count}</span>
        <button onClick={() => handleClick(true)}>+</button>
        <div className="backLink" onClick={() => navigate("/")}>
          Back to homepage
        </div>
      </div>
    </>
  );
};

export default Counter;
