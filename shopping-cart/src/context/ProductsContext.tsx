import { useState, createContext, useContext } from "react";
import { StoreItemProps } from "../components/StoreItem";
import { useEffect } from "react";

export type ProductContextProps = {
  products: StoreItemProps[];
  loading: boolean;
  error: string | null;
  searchValue: string;
  setSearchValue: React.Dispatch<string>;
};

export const productContext = createContext({});

export const useProductContext = () => {
  return useContext(productContext);
};

const ProductsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productItems, setProductItems] = useState<StoreItemProps[]>([]);
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const [searchValue, setSearchValue] = useState<string>("");
  const [ascOrder, setAscOrder] = useState(true);

  const products = productItems?.filter(
    (item: StoreItemProps) =>
      item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
  );

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
    console.log("useeffect counting");
    getProducts()
      .then((data) => {
        setProductItems(data);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setProductItems([]);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <productContext.Provider
      value={
        {
          loading,
          error,
          products,
          searchValue,
          setSearchValue,
        } as ProductContextProps
      }
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductsContextProvider;
