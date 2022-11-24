import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FilterProducts from "../components/FilterProducts";
import Store from "../components/Store";
import ShoppingCartContextProvider from "../context/ShoppingCartContext";
import { useState } from "react";

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  return (
    <Container fluid>
      <Row>
        <ShoppingCartContextProvider>
          <FilterProducts isFilterOpen={isFilterOpen} />
          <Store isFilterOpen={isFilterOpen} toggleFilter={toggleFilter} />
        </ShoppingCartContextProvider>
      </Row>
    </Container>
  );
};

export default Shop;
