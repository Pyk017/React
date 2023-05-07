import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Typography variant="h3">404 Not Found!</Typography>
      <NavLink to="/">Go to Home</NavLink>
    </>
  );
};

export default NotFound;
