import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [isPending, setIsPending] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    //* Abort Controller is used to contain/resolve the error occured when fetch is fired but not completed(another route is accessed at that time). So we use it to abort the fetch request when user triggers another route while fetch is fetching the data.
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal }) //? some options of fetch.
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            //? we don't have to trigger the useState hook to update the component thus using this condition.
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
