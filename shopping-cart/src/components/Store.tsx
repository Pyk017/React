import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StoreItem, { StoreItemProps } from "./StoreItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";
import IconButton from "@mui/material/IconButton";
import { fitlerStateType } from "../pages/Shop";
import {
  useProductContext,
  ProductContextProps,
} from "../context/ProductsContext";
import { roundOff } from "../utils/formatCurrency";
import {
  ItemType,
  ShoppingCartContextType,
  useShoppingContext,
} from "../context/ShoppingCartContext";

interface StoreProps {
  isFilterOpen: boolean;
  toggleFilter: () => void;
  filteredParam: fitlerStateType;
}

const Store = ({ isFilterOpen, toggleFilter, filteredParam }: StoreProps) => {
  let { loading, error, products } = useProductContext() as ProductContextProps;
  const { cartItems } = useShoppingContext() as ShoppingCartContextType;

  const getFilteredData = () => {
    if (Object.keys(filteredParam).length === 0) {
      products = products.sort((a, b) => a.id - b.id);
    }

    if (filteredParam.toggleOrder === true) {
      products.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (filteredParam.toggleOrder === false) {
      products.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (filteredParam.fastDelivery) {
      products = products.filter((item: StoreItemProps) => item.fast_delivery);
    }

    if (filteredParam.favourite === true) {
      products = products.filter((item: StoreItemProps) => {
        return (
          cartItems.find((_i: ItemType) => _i.id === item.id)?.favourite ||
          false
        );
      });
    }

    if (filteredParam.rating) {
      return products.filter(
        (item: StoreItemProps) =>
          roundOff(item.rating.rate) === filteredParam.rating
      );
    }

    if (filteredParam.outOfStock) {
      return products;
    }

    return products.filter((item: StoreItemProps) => item.in_stock);
  };

  products = getFilteredData();

  console.log("products :>> ", products, filteredParam);
  console.log("cartItems :>> ", cartItems);

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
