import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { careerType } from "../pages/Careers";
import { NavLink } from "react-router-dom";

type propsTypes = {
  career: careerType;
};

const CareerCard = ({ career }: propsTypes) => {
  return (
    <>
      <Stack
        sx={{
          p: 2,
          my: 2,
          background: "#e7e7e7",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">{career.title}</Typography>
          <Typography variant="h5">{career.location}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h5">Salary:- </Typography>
          <Typography variant="h4">{career.salary}</Typography>
        </Box>
        <NavLink
          to={career.id.toString()}
          style={{
            textDecoration: "none",
          }}
        >
          <Button variant="text" color="secondary">
            View Details
          </Button>
        </NavLink>
      </Stack>
    </>
  );
};

export default CareerCard;
