import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <>
      <Typography variant="h2">Career Page</Typography>
      <Outlet />
    </>
  );
};

export default CareersLayout;
