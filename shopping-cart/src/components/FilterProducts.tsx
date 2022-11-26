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
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import roundOff from "../utils/formatCurrency";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

type FilterProductsProps = {
  isFilterOpen: boolean;
};

const StyledRating = styled(Rating)({
  "& .MuiRating-icon": {
    color: "#fff",
  },

  "& .MuiRating-iconHover": {
    color: "#faaf00",
  },
});

const FilterProducts = ({ isFilterOpen }: FilterProductsProps) => {
  const [radio, setRadio] = useState("");
  const [includeStock, setIncludeStock] = useState(false);
  const [fastDelivery, setFastDelivery] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [rating, setRating] = useState<number>(2);

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
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder sx={{ color: blue[500] }} />}
                checkedIcon={<Favorite sx={{ color: blue[500] }} />}
                value={favourite}
                onChange={() => setFavourite(!favourite)}
              />
            }
            label="Favourites"
          />
        </FormGroup>
      </FormControl>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="mb-2"
      >
        <Typography gutterBottom variant="body1">
          Rating :{" "}
        </Typography>
        <StyledRating
          name="simple-controlled"
          value={+roundOff(rating)}
          onChange={(event, newRating) => {
            setRating(+roundOff(newRating || 0));
          }}
          className="mx-auto my-1"
        />
      </Stack>

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
