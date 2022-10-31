import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { INote } from "./interfaces/ITask";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const cors = require("cors");

app.use(
  express.json(),
  cors({
    origin: "http://localhost:3000",
  })
);
app.options("*", cors()); // include before other routes

mongoose.connect(process.env.MONGODB_URI).then(console.log("DB connected"));

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
app.post("/notes", (req: Request, res: Response) => {
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
app.get("/notes", (req: Request, res: Response) => {
  Note.find({}).then((tasks: [INote]) => {
    res.send(tasks);
  });
});

// getting a specific task
app.get("/notes/:id", (req: Request, res: Response) => {
  console.log(req.params.id);
  Note.findById(req.params.id).then((task: INote) => {
    res.send(task);
  });
});

// updating a specific task
app.put("/notes/:id", (req: Request, res: Response) => {
  console.log(req.body);
  Note.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.send(req.body);
  });
});

export default app;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
