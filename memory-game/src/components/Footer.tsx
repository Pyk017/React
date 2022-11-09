import Stack from "react-bootstrap/Stack";

const Footer = ({ turns }: { turns: number }) => {
  return (
    <Stack
      direction="vertical"
      className="align-items-center justify-content-center fw-bold"
    >
      <div className="fs-4">Turns</div>
      <p>{turns}</p>
    </Stack>
  );
};

export default Footer;
