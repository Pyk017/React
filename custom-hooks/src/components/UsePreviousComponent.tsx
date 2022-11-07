import { useState } from "react";
import usePrevious from "../hooks/usePrevious";
import BackToHomePage from "./BackToHomePage";
import Heading from "./Heading";

const UsePreviousComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");
  const prevCount = usePrevious(count);

  return (
    <>
      <Heading header="usePrevious" />
      <div>
        <div>{`${count} -- ${prevCount}`}</div>
        <div>{name}</div>
        <button onClick={() => setCount((currCount: any) => currCount + 1)}>
          Increment
        </button>
        <button onClick={() => setName("Doe")}>Change Name</button>
      </div>
      <BackToHomePage />
    </>
  );
};

export default UsePreviousComponent;
