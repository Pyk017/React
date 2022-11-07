import BackToHomePage from "./BackToHomePage";
import Heading from "./Heading";
import useAsync from "../hooks/useAsync";

const UseAsynComponent = () => {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve("hi") : reject("error");
      }, 1000);
    });
  });

  return (
    <>
      <Heading header="useAsync" />
      <div>
        <div>Loading: {loading.toString()}</div>
        <div>{error}</div>
        <div>{value}</div>
      </div>
      <BackToHomePage />
    </>
  );
};

export default UseAsynComponent;
