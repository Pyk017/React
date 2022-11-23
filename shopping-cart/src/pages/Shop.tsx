import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FilterProducts from "../components/FilterProducts";
import Store from "../components/Store";
import { useEffect, useState } from "react";

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  return (
    <Container fluid>
      <Row>
        <FilterProducts isFilterOpen={isFilterOpen} />
        <Store isFilterOpen={isFilterOpen} toggleFilter={toggleFilter} />
      </Row>
    </Container>
  );
};

export default Shop;
