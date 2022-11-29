import { useState, createContext, useContext } from "react";
import { StoreItemProps } from "../components/StoreItem";
import { useEffect, useReducer } from "react";

type actionType = {
  type: string;
  payload?: any;
};

export type ProductContextProps = {
  products: StoreItemProps[];
  loading: boolean;
  error: string | null;
  searchValue: string;
  setSearchValue: React.Dispatch<string>;
  dispatch: React.Dispatch<actionType>;
};

export const productContext = createContext({});

export const useProductContext = () => {
  return useContext(productContext);
};

export const ACTIONS = {
  ADD_DATA: "addData",
  ASCENDING: "ascending",
  DESCENDING: "descending",
};

function reducer(products: StoreItemProps[], action: actionType) {
  switch (action.type) {
    case ACTIONS.ADD_DATA:
      return action.payload;
    case ACTIONS.ASCENDING:
      return products?.sort((a, b) => a.title.localeCompare(b.title));
    case ACTIONS.DESCENDING:
      return products?.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return products;
  }
}

const ProductsContextProvider = ({ children }: React.PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const [productItems, setProductItems] = useState<StoreItemProps[]>([]);

  const [productItems, dispatch] = useReducer(reducer, [] as StoreItemProps[]);

  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const [searchValue, setSearchValue] = useState<string>("");
  // const [ascOrder, setAscOrder] = useState(true);

  const products = productItems?.filter(
    (item: StoreItemProps) =>
      item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
  );
  console.log("products :>> ", products);

  // console.log("products :>> ", products);

  // const [productState, dispatch] = useReducer(reducer, products);

  // console.log("productItems :>> ", productItems);
  // console.log("productState :>> ", productState);

  // if (!ascOrder) {
  //   products?.sort((a, b) => b.title.localeCompare(a.title));
  // }

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
        // setProductItems(data);
        dispatch({ type: ACTIONS.ADD_DATA, payload: data });
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        // setProductItems([]);
        dispatch({ type: ACTIONS.ADD_DATA, payload: [] });
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
          // productState,
          dispatch,
        } as ProductContextProps
      }
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductsContextProvider;
