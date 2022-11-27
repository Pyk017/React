import Button from "@mui/material/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "@mui/material/Stack";
import {
  useShoppingContext,
  ShoppingCartContextType,
} from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "../utils/formatCurrency";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

type ShoppingCartSidebarProps = {
  isCartOpen: boolean;
};

const ShoppingCartSideBar = ({ isCartOpen }: ShoppingCartSidebarProps) => {
  const { closeCart, cartItems, emptyCart } =
    useShoppingContext() as ShoppingCartContextType;

  return (
    <Offcanvas
      show={isCartOpen}
      onHide={closeCart}
      placement="end"
      scroll={false}
      backdrop={true}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Bag</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack spacing={3} alignContent="center" justifyContent="center">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <Stack
            direction="row"
            spacing={3}
            alignContent="center"
            justifyContent="between"
          >
            <Button
              variant="contained"
              color="error"
              size="small"
              className=""
              startIcon={<RemoveShoppingCartIcon />}
              onClick={emptyCart}
            >
              Empty cart
            </Button>
            <div className="ms-auto fw-bold fs-5">
              {" "}
              Total{" "}
              {formatCurrency(
                cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )
              )}
            </div>
          </Stack>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCartSideBar;
