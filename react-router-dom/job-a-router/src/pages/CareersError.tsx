import { useRouteError, NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

const CareersError = () => {
  const error = useRouteError() as any;

  return (
    <>
      <Typography variant="h2">Career Page</Typography>
      <Typography variant="h3">{error.message}</Typography>
      <NavLink to="/">
        <Typography variant="body1">Back to homepage</Typography>
      </NavLink>
    </>
  );
};

export default CareersError;
