import {
  ItemType,
  useShoppingContext,
  ShoppingCartContextType,
} from "../context/ShoppingCartContext";
import Stack from "@mui/material/Stack";
import formatCurrency from "../utils/formatCurrency";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const CartItem = ({ id, title, quantity, image, price }: ItemType) => {
  const { removeFromCart } = useShoppingContext() as ShoppingCartContextType;

  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={2}>
        <img
          src={image}
          alt="product image"
          style={{ width: "7rem", height: "5rem", objectFit: "cover" }}
        />

        <div className="me-auto">
          <div>
            {title}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x {quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(price)}
          </div>
        </div>
        <div>{formatCurrency(price * quantity)}</div>
      </Stack>
      <Button
        variant="outlined"
        color="error"
        size="small"
        className=""
        startIcon={<CloseIcon color="inherit" />}
        onClick={() => removeFromCart(id)}
      >
        Remove from cart
      </Button>
    </Stack>
  );
};

export default CartItem;
