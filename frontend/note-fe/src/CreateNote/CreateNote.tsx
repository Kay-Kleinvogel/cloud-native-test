import { useNavigate, useParams } from "react-router-dom";
import { INote } from "../Interfaces/INotes";
import Editor from "./Editor/Editor";

interface IProps {
  note?: INote;
}

const CreateNote = () => {
  const navigate = useNavigate();

  const saveNote = (noteObject: INote) => {
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

  const getData = (noteObject: INote) => {
    saveNote(noteObject);
  };

  const generateNoteObject = () => {
    const newNote: INote = {
      name: "Your Title",
      tags: [""],
      participants: [""],
      notes: "Your Content",
      created: Date.now(),
    };
    return newNote;
  };

  return <Editor sendData={getData} noteObject={generateNoteObject} />;
};

export default CreateNote;
