import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [tasks, setTask] = useState(null);

  const [isPending, setIsPending] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch the data");
        }
        return response.json();
      })
      .then((data) => {
        setIsPending(false);
        setTask(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  return {
    tasks,
    isPending,
    error,
  };
};

export default useFetch;
