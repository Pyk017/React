import storeItems from "../data/items.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StoreItem from "./StoreItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterAltOffOutlinedIcon from "@mui/icons-material/FilterAltOffOutlined";
import IconButton from "@mui/material/IconButton";

type StoreProps = {
  isFilterOpen: boolean;
  toggleFilter: () => void;
};

const Store = ({ isFilterOpen, toggleFilter }: StoreProps) => {
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
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default Store;
