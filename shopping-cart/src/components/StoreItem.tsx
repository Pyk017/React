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

type StoreItemProps = {
  id: number;
  price: number;
  name: string;
  img_url: string;
};

const StoreItem = ({ id, name, price, img_url }: StoreItemProps) => {
  const [favourite, setFavourite] = useState(false);
  const count = 0;

  console.log("favourite :>> ", favourite);

  return (
    <Card elevation={3}>
      <CardMedia
        component="img"
        height="200"
        image={img_url}
        alt="product thumbnail"
      />
      <CardContent className="d-flex align-items-baseline justify-content-between">
        <Typography variant="h6" color="text.primary">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" className="ms-2">
          {formatCurrency(price)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: red[500] }} />}
          value={favourite}
          onChange={() => setFavourite(!favourite)}
        />
        {count === 0 ? (
          <Button
            variant="contained"
            className="w-100 mx-3"
            startIcon={<AddShoppingCartIcon />}
          >
            Add to Cart
          </Button>
        ) : (
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            className="align-items-center justify-content-center w-100"
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
