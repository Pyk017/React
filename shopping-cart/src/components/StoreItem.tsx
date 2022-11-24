import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import formatCurrency from "../utils/formatCurrency";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Rating from "@mui/material/Rating";
import { roundOff } from "../utils/formatCurrency";

export type StoreItemProps = {
  id: number;
  price: number;
  title: string;
  image: string;
  rating: { rate: number; count: number };
  description: string;
};

const StoreItem = ({
  id,
  title,
  price,
  image,
  rating,
  description,
}: StoreItemProps) => {
  const [favourite, setFavourite] = useState(false);
  const count = 0;

  return (
    <Card elevation={3} className="__card">
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="product thumbnail"
      />
      <CardContent>
        <Stack
          className="d-flex align-items-baseline justify-content-between"
          direction="row"
        >
          <Typography variant="h6" color="text.primary" className="card-title">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            className="ms-2"
          >
            {formatCurrency(price)}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          className="align-items-center justify-content-between"
        >
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: red[500] }} />}
            value={favourite}
            onChange={() => setFavourite(!favourite)}
          />
          <Rating name="read-only" value={roundOff(rating.rate)} readOnly />
          <Button variant="text" size="small" color="primary">
            View More
          </Button>
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        {count === 0 ? (
          <Button
            variant="contained"
            className="w-100 mx-3 mb-2"
            startIcon={<AddShoppingCartIcon />}
          >
            Add to Cart
          </Button>
        ) : (
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            className="align-items-center justify-content-center w-100 mb-2"
          >
            <Button variant="contained" size="small">
              <AddIcon />
            </Button>
            <Typography variant="subtitle2" color="text.secondary">
              2 items
            </Typography>
            <Button variant="contained" size="medium">
              <RemoveIcon />
            </Button>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
};

export default StoreItem;
