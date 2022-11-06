import Heading from "./Heading";
import BackToHomePage from "./BackToHomePage";
import { useState } from "react";
import useTimeout from "../hooks/useTimeout";

const UseTimeoutComponent = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);
  return (
    <>
      <Heading header="useTimeout" />
      <div>
        <div>{count.toString()}</div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={clear}>Clear Timeout</button>
        <button onClick={reset}>Reset Timeout</button>
      </div>
      <BackToHomePage />
    </>
  );
};

export default UseTimeoutComponent;
