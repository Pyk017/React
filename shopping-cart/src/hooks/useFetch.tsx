import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { StoreItemProps } from "../components/StoreItem";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState<StoreItemProps[] | null>(null);

  const getProducts = async () => {
    const res = await fetch(url);

    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }

    const response = await res.json();
    return response;
  };

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log(data);
        setProducts(data);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setProducts(null);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    error,
    products,
  };
};

export default useFetch;
