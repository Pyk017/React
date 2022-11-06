import BackToHomePage from "./BackToHomePage";
import Heading from "./Heading";

import { useState } from "react";
import useUpdateEffect from "../hooks/useUpdateEffect";

const UseUpdateEffectComponent = () => {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);
  return (
    <>
      <Heading header="useUpdateEffect" />
      <div>
        <div>{count}</div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      <BackToHomePage />
    </>
  );
};

export default UseUpdateEffectComponent;
