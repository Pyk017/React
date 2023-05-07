import { useQuery } from "react-query";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import { useState, useEffect } from "react";
import axios from "axios";

import { superheroType } from "../globalTypes";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (isError) {
    return <Typography variant="h3">{(error as any)?.message}</Typography>;
  }

  return (
    <>
      <Typography variant="h3">RQSuperHeroes Page</Typography>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        {data?.data.map((x: superheroType) => (
          <>
            <ListItem alignItems="flex-start" key={x.id}>
              <ListItemAvatar>
                <Avatar alt={x.superhero} src={x.image_link} />
              </ListItemAvatar>
              <ListItemText
                primary={x.superhero}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {x.alter_ego}
                    </Typography>
                    {"-- " + x.first_appearance}
                  </>
                }
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </>
  );
};

export default RQSuperHeroes;
