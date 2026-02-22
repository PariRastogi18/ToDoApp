const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

let tasks = [
  {
    id: "1a",
    taskName: "task1",
  },
  {
    id: "2a",
    taskName: "task2",
  },
];
app.get("/todo", (req, res) => {
  res.render("index.ejs", { tasks });
});
app.post("/todo", (req, res) => {
  let { taskName } = req.body;
  if (!taskName || !taskName.trim()) {
    return res.redirect("/todo");
  }

  let id = uuidv4();
  tasks.push({ id, taskName });
  res.redirect("/todo");
});
app.get("/todo/:id/edit", (req, res) => {
  let { id } = req.params;
  let task = tasks.find((t) => id === t.id);
  res.render("edit.ejs", { task });
});
app.patch("/todo/:id", (req, res) => {
  let { id } = req.params;
  let newTask = req.body.taskName;
  let task = tasks.find((t) => id === t.id);
  task.taskName = newTask;
  res.redirect("/todo");
});
app.delete("/todo/:id", (req, res) => {
  let { id } = req.params;
  tasks = tasks.filter((t) => id !== t.id);
  res.redirect("/todo");
});
app.listen(port, () => {
  console.log(`listening port on ${port}`);
});
