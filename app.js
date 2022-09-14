import express from "express";
import path from "path";

import { storyRouter } from "./routes/story.js";
import { taskRouter } from "./routes/task.js";

const app = express();

app.use(express.json())
app.use(express.static("public"));
app.use(storyRouter)
app.use(taskRouter)


app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

app.listen(8080, () => {
  console.log("Server is running on port:", 8080);
});
