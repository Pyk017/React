import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { blue } from "@mui/material/colors";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { useState } from "react";

type FilterProductsProps = {
  isFilterOpen: boolean;
};

const FilterProducts = ({ isFilterOpen }: FilterProductsProps) => {
  const [radio, setRadio] = useState("");
  const [includeStock, setIncludeStock] = useState(false);
  const [fastDelivery, setFastDelivery] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.currentTarget as HTMLInputElement).value);
  };

  const displayClass = isFilterOpen ? "flex !important" : "none !important";

  return (
    <Col
      sm={3}
      className="filter-container bg-dark flex-column p-3"
      style={{ display: displayClass }}
    >
      <div className="filter-header mb-1 text-center text-uppercase fw-bold">
        Filter Product
      </div>
      <FormControl>
        <RadioGroup value={radio} onChange={handleChange}>
          <FormControlLabel
            value="ascending"
            control={<Radio sx={{ color: blue[500] }} />}
            label="Ascending Order"
          />
          <FormControlLabel
            value="descending"
            control={<Radio sx={{ color: blue[500] }} />}
            label="Descending Order"
          />
        </RadioGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: blue[500] }}
                value={includeStock}
                onChange={(e) => setIncludeStock(e.currentTarget.checked)}
              />
            }
            label="Include Out of Stock"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: blue[500] }}
                value={fastDelivery}
                onChange={(e) => setFastDelivery(e.currentTarget.checked)}
              />
            }
            label="Fast Delivery Only"
          />
        </FormGroup>
      </FormControl>
      <Button
        variant="contained"
        className="w-100"
        startIcon={<ClearAllIcon />}
        color="error"
      >
        Clear all filters
      </Button>
    </Col>
  );
};

export default FilterProducts;
