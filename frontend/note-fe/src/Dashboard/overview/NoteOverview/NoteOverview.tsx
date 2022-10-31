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

  const editTask = (note: INote) => {
    console.log(note);

    // navigate to edit page
    navigate("/edit/" + note._id);
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
        {note.tags.map((tag, index) => {
          return <Chip label={tag} key={index} />;
        })}
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size='small' variant='contained'>
          View More
        </Button>

        <Button size='small' onClick={(event) => editTask(note)}>
          Edit Task
        </Button>
      </CardActions>
    </Card>
  );
};

export default NoteOverview;
