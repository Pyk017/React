import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FilterProducts from "../components/FilterProducts";
import Store from "../components/Store";
import { useState, useReducer } from "react";

import {
  useProductContext,
  ProductContextProps,
} from "../context/ProductsContext";
import { StoreItemProps } from "../components/StoreItem";

export type actionTypes = {
  type: string;
  payload: any;
};

export const ACTIONS = {
  ADD_DATA: "addProducts",
};

function reducer(productItems: StoreItemProps[], actions: actionTypes) {
  switch (actions.type) {
    case ACTIONS.ADD_DATA:
      return actions.payload;

    default:
      return productItems;
  }
}

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [filterParam, setFilterParam] = useState<string | number | null>(null);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const { loading, error, products } =
    useProductContext() as ProductContextProps;

  const [productItems, dispatch] = useReducer(reducer, [] as StoreItemProps[]);

  if (!loading) {
    dispatch({ type: ACTIONS.ADD_DATA, payload: products });
  }

  console.log("productItems :>> ", productItems);
  
  const changeFilter = (newParam: string | number | null) =>
    setFilterParam(newParam);

  return (
    <Container fluid>
      <Row>
        <FilterProducts
          isFilterOpen={isFilterOpen}
          filterParam={filterParam}
          changeFilter={changeFilter}
        />
        <Store
          isFilterOpen={isFilterOpen}
          toggleFilter={toggleFilter}
          filterParam={filterParam}
          loading={loading}
          error={error}
          products={products}
        />
      </Row>
    </Container>
  );
};

export default Shop;
