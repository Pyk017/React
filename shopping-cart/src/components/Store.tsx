import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StoreItem, { StoreItemProps } from "./StoreItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";
import IconButton from "@mui/material/IconButton";

import {
  useProductContext,
  ProductContextProps,
} from "../context/ProductsContext";
import { roundOff } from "../utils/formatCurrency";

interface StoreProps {
  isFilterOpen: boolean;
  toggleFilter: () => void;
  filterParam: string | number | null;
  loading: boolean;
  error: string | null;
  products: StoreItemProps[];
}

const ACTIONS = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
  RATING: "rating",
};

const Store = ({
  isFilterOpen,
  toggleFilter,
  filterParam,
  loading,
  error,
  products,
}: StoreProps) => {
  // let { loading, error, products } = useProductContext() as ProductContextProps;

  console.log("filterParam :>> ", filterParam);

  const getFilteredData = (filterParam: string | number | null) => {
    if (filterParam === null || filterParam === 0) {
      return products.sort((a, b) => a.id - b.id);
    }

    if (typeof filterParam === "number") {
      return products.filter(
        (item: StoreItemProps) => roundOff(item.rating.rate) === filterParam
      );
    }

    switch (filterParam) {
      case ACTIONS.ASCENDING:
        return products.sort((a, b) => a.title.localeCompare(b.title));

      case ACTIONS.DESCENDING:
        return products.sort((a, b) => b.title.localeCompare(a.title));
    }

    return products;
  };

  products = getFilteredData(filterParam);

  console.log("products :>> ", products, filterParam);

  return (
    <Col sm={9} className="product-container py-3">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        spacing={2}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontFamily: '"Noto Sans JP", sans-serif !important' }}
        >
          Store
        </Typography>
        <IconButton
          color="primary"
          size="large"
          className="filter-btn"
          onClick={toggleFilter}
        >
          {isFilterOpen ? (
            <FilterAltOffOutlinedIcon fontSize="inherit" />
          ) : (
            <FilterAltOutlinedIcon fontSize="inherit" />
          )}
        </IconButton>
      </Stack>
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Some error occured!</h1>}
      {products && (
        <Row xs={1} md={2} lg={3} className="g-3">
          {products.map((item: StoreItemProps) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      )}
    </Col>
  );
};

export default Store;
