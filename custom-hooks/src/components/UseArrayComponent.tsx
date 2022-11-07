import Heading from "./Heading";
import BackToHomePage from "./BackToHomePage";
import useArray from "../hooks/useArray";

const UseArrayComponent = () => {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <>
      <Heading header="useArray" />
      <div>
        <div>{array.join(", ")}</div>
        <button onClick={() => push(7)}>Add 7</button>
        <button onClick={() => update(1, 9)}>Change Second element to 9</button>
        <button onClick={() => remove(1)}>remove Second element</button>
        <button onClick={() => filter((n: any) => n < 4)}>
          Keep numbers less than 4
        </button>
        <button onClick={() => set([1, 2, 3])}>Set to 1, 2, 3</button>
        <button onClick={clear}>Clear Array</button>
      </div>
      <BackToHomePage />
    </>
  );
};

export default UseArrayComponent;
