import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/TodoBackend")
  .then(console.log("DB connected"));

const taskSchema = new mongoose.Schema({
  name: String,
  tags: [String],
  created: Number,
});
const Task = mongoose.model("Task", taskSchema);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/todo", (req: Request, res: Response) => {
  const newTask = {
    name: "testTask",
    tags: ["personal"],
    created: Date.now(),
  };
  const task = new Task(newTask);
  task.save().then(() => {
    res.send(newTask);
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
