import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import formatCurrency, { roundOff } from "../utils/formatCurrency";
import { red } from "@mui/material/colors";
import {
  useShoppingContext,
  ShoppingCartContextType,
} from "../context/ShoppingCartContext";
import Rating from "@mui/material/Rating";

const ItemDialog = ({ _item, open, handleDialogClose }: any) => {
  const { id, image, title, price, rating, description } = _item;

  const { getItemFavouritism, setItemFavouritism } =
    useShoppingContext() as ShoppingCartContextType;

  const favourite = getItemFavouritism(id);

  return (
    <Dialog open={open} onClose={handleDialogClose} maxWidth="sm">
      <DialogContent>
        <Card
          elevation={3}
          className="__card d-flex justify-content-between flex-column"
        >
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
              <Typography
                variant="h6"
                color="text.primary"
                className="card-title"
              >
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

            <Typography
              variant="body2"
              color="text.secondary"
              className="card-description"
            >
              {description}
            </Typography>

            <Stack
              direction="row"
              className="align-items-center justify-content-between align-items-center my-2"
            >
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: red[500] }} />}
                value={favourite}
                defaultChecked={favourite}
                onChange={() => setItemFavouritism(id)}
              />
              <Rating name="read-only" value={roundOff(rating.rate)} readOnly />
              <Button
                variant="outlined"
                color="error"
                onClick={handleDialogClose}
              >
                Close
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ItemDialog;
