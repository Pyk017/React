import BackToHomePage from "./BackToHomePage";
import Heading from "./Heading";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const UseFetchComponent = () => {
  const [id, setId] = useState(1);
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  );

  return (
    <>
      <Heading header="useFetch" />
      <div>
        <div>{id}</div>
        <button onClick={() => setId((currentId) => currentId + 1)}>
          Increment ID
        </button>
        <div>Loading: {loading.toString()}</div>
        <div>{JSON.stringify(error, null, 2)}</div>
        <div>{JSON.stringify(value, null, 2)}</div>
      </div>
      <BackToHomePage />
    </>
  );
};

export default UseFetchComponent;
