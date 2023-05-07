import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import axios from "axios";

import { superheroType } from "../globalTypes";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Typography variant="h5">Loading ...</Typography>;
  }

  if (error) {
    return (
      <Typography variant="h3" color="danger">
        {error}
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h3">Super Heroes Page</Typography>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        {data.map((x: superheroType) => (
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

export default SuperHeroes;
