import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { ITask } from "./interfaces/ITask";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/TodoBackend")
  .then(console.log("DB connected"));

const taskSchema = new mongoose.Schema({
  _id: String,
  name: String,
  tags: [String],
  created: Number,
});
const Task = mongoose.model("Task", taskSchema);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// creating a new task
app.post("/todo", (req: Request, res: Response) => {
  const newTask: ITask = {
    _id: crypto.randomUUID(),
    name: req.body.name,
    tags: req.body.tags,
    created: Date.now(),
  };
  const task = new Task(newTask);
  task.save().then(() => {
    res.statusCode = 201;
    res.send(newTask);
  });
});

// getting all tasks
app.get("/todo", (req: Request, res: Response) => {
  Task.find({}).then((tasks: [ITask]) => {
    res.send(tasks);
  });
});

// getting a specific task
app.get("/todo/:id", (req: Request, res: Response) => {
  Task.findById(req.params.id).then((task: ITask) => {
    res.send(task);
  });
});

export default app;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
