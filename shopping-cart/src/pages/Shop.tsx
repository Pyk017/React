import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Shop = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="filter-container bg-dark d-flex flex-column">
          <div className="filter-header">Filter Product</div>
          <Form>
            <Form.Check type="radio" label="Ascending" />
            <Form.Check type="radio" label="Descending" />
            <Form.Check type="checkbox" label="Include Out of Stock" />
            <Form.Check type="checkbox" label="Fast Delivery Only" />
          </Form>
          <Button variant="light">Clear all filters</Button>
        </Col>
        <Col md={9} className="product-container bg-success"></Col>
      </Row>
    </Container>
  );
};

export default Shop;
