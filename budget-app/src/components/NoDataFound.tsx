import { Container, Alert } from "react-bootstrap";

const NoDataFound = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center m-4">
      <Alert variant={"danger"}>No Expenses Recorded.</Alert>
    </Container>
  );
};

export default NoDataFound;
