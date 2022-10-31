import React from "react";
import { useParams } from "react-router-dom";
import { INote } from "../Interfaces/INotes";
import Editor from "./Editor/Editor";

const EditNote = () => {
  const { id } = useParams();

  const newNote: INote = {
    name: "Your Title",
    tags: [""],
    participants: [""],
    notes: "Your Content",
    created: Date.now(),
  };

  // handle data as state
  const [note, setNote] = React.useState(newNote);

  // get note from id
  const getData = () => {
    fetch("http://localhost:8080/notes/" + id)
      .then((res) => res.json())
      .then((data) => setNote(data));
  };
  React.useEffect(() => {
    getData();
  }, []);

  const logData = (note: INote) => {
    console.log(note);
  };

  return <Editor sendData={logData} noteObject={note} key={note._id} />;
};

export default EditNote;
