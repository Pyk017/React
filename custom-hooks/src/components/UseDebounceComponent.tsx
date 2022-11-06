import Heading from "./Heading";
import BackToHomePage from "./BackToHomePage";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const UseDebounceComponent = () => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <>
      <Heading header="useDebounce" />
      <div>
        <div>{count}</div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      <BackToHomePage />
    </>
  );
};

export default UseDebounceComponent;
