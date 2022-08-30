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
import { INote } from "../../Interfaces/INotes";

interface IProps {
  note: INote;
}

const NoteOverview = ({ note }: IProps) => {
  const date = new Date(note.created);

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

        <Button size='small'>Edit Task</Button>
      </CardActions>
    </Card>
  );
};

export default NoteOverview;
