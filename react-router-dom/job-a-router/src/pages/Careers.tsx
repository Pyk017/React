import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLoaderData } from "react-router-dom";
import CareerCard from "../components/CareerCard";

export type careerType = {
  id: number;
  title: string;
  salary: number;
  location: string;
};

const Careers = () => {
  const careers = useLoaderData() as careerType[];

  return (
    <>
      <Box>
        {careers.map((career: careerType) => (
          <CareerCard key={career.id} career={career} />
        ))}
      </Box>
    </>
  );
};

export default Careers;
