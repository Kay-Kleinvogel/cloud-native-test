import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Overview = () => {
  // state
  const [notes, setNotes] = React.useState();

  const getData = () => {
    fetch("http://localhost:8080/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };
  React.useEffect(() => {
    getData();
    console.log(notes);
  }, []);

  return (
    <Container>
      <Typography variant='h1' component='h1'>
        Task Overview
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary='Notes' secondary='0' />
        </ListItem>
      </List>
    </Container>
  );
};

export default Overview;
