import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { notStrictEqual } from "assert";
import React from "react";
import { useNavigate } from "react-router-dom";
import { INote } from "../../../Interfaces/INotes";

interface IProps {
  note: INote;
}

const NoteOverview = ({ note }: IProps) => {
  const date = new Date(note.created);

  const navigate = useNavigate();

  const editNote = (note: INote) => {
    console.log(note);

    // navigate to edit page
    navigate("/edit/" + note._id);
  };

  const deleteNote = (note: INote) => {
    console.log(note);

    // delete the note
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    };
    fetch("http://localhost:8080/notes/" + note._id, requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
    // reload the page
    window.location.reload();
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {date.toLocaleDateString()}
        </Typography>
        <Typography variant='h5' component='h2'>
          {note.name}
        </Typography>
        {/* {note.tags.map((tag, index) => {
          return <Chip label={tag} key={index} />;
        })} */}
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          size='small'
          variant='text'
          onClick={(event) => deleteNote(note)}
        >
          Delete Note
        </Button>

        <Button
          size='small'
          variant='contained'
          onClick={(event) => editNote(note)}
        >
          Open Note
        </Button>
      </CardActions>
    </Card>
  );
};

export default NoteOverview;
