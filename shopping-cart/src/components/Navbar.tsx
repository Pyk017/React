import { Navbar as NavbarBs, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarBs bg="primary" variant="dark" sticky="top" expand="sm">
      <Container fluid="md">
        <NavbarBs.Toggle aria-controls="navbar-toggler" />
        <NavbarBs.Collapse id="navbar-toggler">
          <Nav className="justify-content-between w-100">
            <div className="d-flex justify-content-evenly">
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

            <Form className="d-flex py-1">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2 w-100"
              />
              <Button variant="success">Search</Button>
            </Form>
            <Button
              variant="outline-danger"
              className="p-1 rounded-circle shop-btn"
              style={{ position: "relative", width: "3rem", height: "3rem" }}
            >
              <Image
                src="/images/shopping-cart.png"
                style={{ width: "2rem", height: "2rem" }}
              />
              <div
                className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                7
              </div>
            </Button>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
