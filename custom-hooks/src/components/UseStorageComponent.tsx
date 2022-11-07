import BackToHomePage from "./BackToHomePage";
import Heading from "./Heading";
import { useSessionStorage, useLocalStorage } from "../hooks/useStorage";

const UseStorageComponent = () => {
  const [name, setName, removeName] = useSessionStorage("name", "John");
  const [age, setAge, removeAge] = useLocalStorage("age", 26);

  return (
    <>
      <Heading header="useStorage" />
      <div>
        <div>{`${name} - ${age}`}</div>
        <button onClick={() => setName("Doe")}>Set Name</button>
        <button onClick={() => setAge(40)}>Set Age</button>
        <button onClick={removeName}>Remove Name</button>
        <button onClick={removeAge}>Remove Age</button>
      </div>
      <BackToHomePage />
    </>
  );
};

export default UseStorageComponent;
