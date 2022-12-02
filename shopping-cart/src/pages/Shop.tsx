import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FilterProducts from "../components/FilterProducts";
import Store from "../components/Store";
import { useState, useReducer } from "react";

export type fitlerStateType = {
  toggleOrder?: boolean | null;
  outOfStock?: boolean | null;
  fastDelivery?: boolean | null;
  rating?: number | null;
  favourite?: boolean | null;
};

export type fitlerActionType = {
  type: string;
  payload?: any;
};

export const ACTIONS = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
  OUT_STOCK: "outOfStock",
  FAST_DELIVERY: "fastDelivery",
  FAVOURITES: "favourites",
  RATING: "rating",
  CLEAR: "clear",
};

function reducer(state: fitlerStateType, action: fitlerActionType) {
  switch (action.type) {
    case ACTIONS.ASCENDING:
      return { ...state, toggleOrder: true };
    case ACTIONS.DESCENDING:
      return { ...state, toggleOrder: false };
    case ACTIONS.OUT_STOCK:
      return { ...state, outOfStock: action.payload };
    case ACTIONS.FAST_DELIVERY:
      return { ...state, fastDelivery: action.payload };
    case ACTIONS.RATING:
      return { ...state, rating: action.payload };
    case ACTIONS.FAVOURITES:
      return { ...state, favourite: action.payload };
    case ACTIONS.CLEAR:
      return {};
    default:
      return state;
  }
}

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const [filteredParam, dispatch] = useReducer(reducer, {} as fitlerStateType);
  return (
    <Container fluid>
      <Row>
        <FilterProducts isFilterOpen={isFilterOpen} dispatch={dispatch} />
        <Store
          isFilterOpen={isFilterOpen}
          toggleFilter={toggleFilter}
          filteredParam={filteredParam}
        />
      </Row>
    </Container>
  );
};

export default Shop;
