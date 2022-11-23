import storeItems from "../data/items.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StoreItem, { StoreItemProps } from "./StoreItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";

type StoreProps = {
  isFilterOpen: boolean;
  toggleFilter: () => void;
};

const Store = ({ isFilterOpen, toggleFilter }: StoreProps) => {
  const [products, setProducts] = useState<StoreItemProps[] | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");

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

  return (
    <Col sm={9} className="product-container py-3">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        spacing={2}
      >
        <Typography variant="h3" gutterBottom>
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
