import {
  Button,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { INote } from "../../Interfaces/INotes";
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

  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {notes &&
          notes.map((note, index) => (
            <Grid item key={index}>
              <NoteOverview note={note} />
            </Grid>
          ))}
        {(!notes || notes.length == 0) && (
          <Typography>There are currently no notes.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Overview;
