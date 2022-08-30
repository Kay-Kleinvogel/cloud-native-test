import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
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
        <Typography variant='body2' component='p'>
          {note.notes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Edit Task</Button>
      </CardActions>
    </Card>
  );
};

export default NoteOverview;
