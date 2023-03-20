import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
  return (
    <>
      <Typography variant="h2">Help Page</Typography>

      <ButtonGroup
        color="secondary"
        disableElevation
        variant="outlined"
        sx={{ py: 2, mx: "auto" }}
      >
        <NavLink to="faq" style={{ textDecoration: "none" }}>
          <Button sx={{ borderRadius: 0 }}>View the FAQs</Button>
        </NavLink>
        <NavLink to="contact" style={{ textDecoration: "none" }}>
          <Button sx={{ borderRadius: 0 }}>Contact Us</Button>
        </NavLink>
      </ButtonGroup>

      <Outlet />
    </>
  );
};

export default HelpLayout;
