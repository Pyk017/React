import Stack from "react-bootstrap/Stack";

const NoDataFound = () => {
  return (
    <Stack
      className="no-data-found justify-content-center align-items-center gap-2 my-2"
      direction="horizontal"
    >
      <img alt="no-data-found" />
      <div className="fs-5 fw-bold">No Expenses Recorded!</div>
    </Stack>
  );
};

export default NoDataFound;
