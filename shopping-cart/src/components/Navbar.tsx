import { Navbar as NavbarBs, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { cyan } from "@mui/material/colors";
import Button from "@mui/material/Button";
import {
  useShoppingContext,
  ShoppingCartContextType,
} from "../context/ShoppingCartContext";

const Navbar = () => {
  const { cartQuantity } = useShoppingContext() as ShoppingCartContextType;

  return (
    <NavbarBs bg="primary" variant="dark" sticky="top" expand="sm">
      <Container fluid="md">
        <NavbarBs.Toggle aria-controls="navbar-toggler" />
        <NavbarBs.Collapse id="navbar-toggler">
          <Nav className="justify-content-between w-100">
            <div className="d-flex justify-content-evenly align-items-center">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/store">
                Store
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </div>

            <Form className="d-flex py-2">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2 w-100"
              />
              <Button variant="contained" color="success">
                Search
              </Button>
            </Form>

            <IconButton size="large" sx={{ color: cyan[50] }}>
              <Badge badgeContent={cartQuantity} color="error">
                <ShoppingCartIcon fontSize="inherit" />
              </Badge>
            </IconButton>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
