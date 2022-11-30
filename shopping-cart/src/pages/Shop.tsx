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

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [filterParam, setFilterParam] = useState<string | number | null>(null);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

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
        />
      </Row>
    </Container>
  );
};

export default Shop;
