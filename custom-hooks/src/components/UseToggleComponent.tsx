import Heading from "./Heading";
import BackToHomePage from "./BackToHomePage";
import useToggle from "../hooks/useToggle";

const UseToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <>
      <Heading header="useToggle" />
      <div>
        <div>{value.toString()}</div>
        <button onClick={toggleValue}>Toggle</button>
        <button onClick={() => toggleValue(true)}>Make True</button>
        <button onClick={() => toggleValue(false)}>Make False</button>
      </div>

      <BackToHomePage />
    </>
  );
};

export default UseToggleComponent;
