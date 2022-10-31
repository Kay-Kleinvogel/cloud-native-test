import {
  Button,
  Container,
  Divider,
  Fab,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { INote } from "../../Interfaces/INotes";

const Editor = (props: any) => {
  const [note, setNote] = React.useState<INote>(props.noteObject);

  const returnNote = () => {
    props.sendData(note);
  };

  return (
    <Container>
      <div className='form' style={{ display: "flex" }}>
        <div
          className='input'
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            margin: "2rem",
          }}
        >
          <TextField
            id='outlined-basic'
            label='Title'
            variant='outlined'
            margin='normal'
            value={note.name}
            onChange={(e) => setNote({ ...note, name: e.target.value })}
          />
          <Divider />
          <TextField
            id='outlined-multiline-static'
            label='Your Content'
            multiline
            variant='outlined'
            margin='normal'
            value={note.notes}
            onChange={(e) => setNote({ ...note, notes: e.target.value })}
          />
        </div>
        <div className='preview' style={{ flex: "1", margin: "2rem" }}>
          <Typography variant='h3' style={{ margin: "1rem 0" }}>
            {note.name}
          </Typography>
          <Divider />
          <ReactMarkdown children={note.notes} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
      <Fab
        color='primary'
        aria-label='add'
        variant='extended'
        component={Button}
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
        onClick={returnNote}
      >
        <SaveAsIcon sx={{ mr: 1 }} />
        Save
      </Fab>
    </Container>
  );
};

export default Editor;
