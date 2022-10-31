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
import { useNavigate, useParams } from "react-router-dom";
import { INote } from "../../Interfaces/INotes";

const Editor = (props: any) => {
  const [title, setTitle] = React.useState("Your Title");
  const [text, setText] = React.useState("Your Content");

  const returnNote = () => {
    props.sendData({ title: title, text: text });
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Divider />
          <TextField
            id='outlined-multiline-static'
            label='Your Content'
            multiline
            defaultValue='Default Value'
            variant='outlined'
            margin='normal'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='preview' style={{ flex: "1", margin: "2rem" }}>
          <Typography variant='h3' style={{ margin: "1rem 0" }}>
            {title}
          </Typography>
          <Divider />
          <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
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
