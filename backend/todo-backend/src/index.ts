import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { INote } from "./interfaces/ITask";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");

app.use(express.json());

mongoose
  .connect("mongodb://172.17.0.2:27017/TodoBackend")
  .then(console.log("DB connected"));

const noteSchema = new mongoose.Schema({
  _id: String,
  name: String,
  tags: [String],
  participants: [String],
  notes: String,
  created: Number,
});
const Note = mongoose.model("Note", noteSchema);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// creating a new note
app.post("/note", (req: Request, res: Response) => {
  const newNote: INote = {
    _id: crypto.randomUUID(),
    name: req.body.name,
    tags: req.body.tags,
    participants: req.body.participants,
    notes: req.body.notes,
    created: Date.now(),
  };
  const note = new Note(newNote);
  note.save().then(() => {
    res.statusCode = 201;
    res.send(newNote);
  });
});

// getting all notes
app.get("/note", (req: Request, res: Response) => {
  Note.find({}).then((tasks: [INote]) => {
    res.send(tasks);
  });
});

// getting a specific task
app.get("/note/:id", (req: Request, res: Response) => {
  Note.findById(req.params.id).then((task: INote) => {
    res.send(task);
  });
});

export default app;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
