import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { INote } from "../Interfaces/INotes";
import NoteOverview from "./NoteOverview/NoteOverview";

const Overview = () => {
  // state
  const [notes, setNotes] = React.useState<INote[]>();

  const getData = () => {
    fetch("http://localhost:8080/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };
  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <Container>
      <Typography variant='h1' component='h1'>
        Task Overview
      </Typography>
      <List>
        {notes &&
          notes.map((note, index) => (
            <ListItem key={index}>
              <NoteOverview note={note} />
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

export default Overview;
