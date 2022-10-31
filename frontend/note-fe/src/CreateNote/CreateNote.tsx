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
import { INote } from "../Interfaces/INotes";
import Editor from "./Editor/Editor";

interface IProps {
  note?: INote;
}

const CreateNote = () => {
  const navigate = useNavigate();

  const saveNote = (title: String, text: String) => {
    // set the basic object for the note
    const noteObject = {
      name: title,
      notes: text,
      tags: ["test1", "test2"],
      participants: ["test1", "test2"],
    };

    // send the note to the server
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteObject),
    };
    fetch("http://localhost:8080/notes", requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));

    // redirect to main page
    navigate("/");
  };

  const getData = (data: { title: "string"; text: "string" }) => {
    saveNote(data.title, data.text);
  };

  return <Editor sendData={getData} />;
};

export default CreateNote;
