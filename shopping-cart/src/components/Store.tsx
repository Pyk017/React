import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StoreItem, { StoreItemProps } from "./StoreItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";
import IconButton from "@mui/material/IconButton";
import useFetch from "../hooks/useFetch";

type StoreProps = {
  isFilterOpen: boolean;
  toggleFilter: () => void;
};

const Store = ({ isFilterOpen, toggleFilter }: StoreProps) => {
  const { loading, error, products } = useFetch(
    "https://fakestoreapi.com/products"
  );

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
