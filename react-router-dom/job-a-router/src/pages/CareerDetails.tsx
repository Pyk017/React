import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLoaderData, useParams } from "react-router-dom";
import { careerType } from "./Careers";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData() as careerType;

  return (
    <>
      <Typography variant="h4">Career Details</Typography>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Typography variant="h5">Career Title</Typography>
        <Typography variant="h6">{career.title}</Typography>
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Typography variant="h5">Starting Salary</Typography>
        <Typography variant="h6">{career.salary}</Typography>
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Typography variant="h5">Job Location</Typography>
        <Typography variant="h6">{career.location}</Typography>
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Typography variant="h5">Job Details</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          voluptas id veritatis pariatur consectetur at expedita, cumque eveniet
          modi. Nam sed rem fugit, necessitatibus ratione quis vel dignissimos.
          Quae, labore iste ducimus itaque quo velit consectetur. Ullam,
          similique unde corporis amet laudantium sit maxime quibusdam delectus
          a architecto eaque ab laboriosam ut quo quaerat pariatur at magni
          nobis voluptatem, illo facere! Soluta corrupti deleniti distinctio in
          odit molestias eaque sapiente? Laborum quae laudantium debitis sequi
          sunt. Earum aut voluptate sed accusantium nemo quas, rerum, obcaecati
          voluptas fugit labore quod vel velit sit enim laboriosam neque dolorum
          esse minima. Facilis, deleniti!
        </Typography>
      </Box>
    </>
  );
};

export default CareerDetails;
