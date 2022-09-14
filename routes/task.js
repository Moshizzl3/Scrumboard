import { Router } from "express";
import { dbConnection } from "../data/db.js";

export const taskRouter = Router();

taskRouter.get("/tasks", async (req, res) => {
  const result = await dbConnection.promise().query(`SELECT * FROM TASK`);
  const tasks = result[0];
  res.send(tasks);
});

taskRouter.get("/tasks/:id", async (req, res) => {
  const result = await dbConnection
    .promise()
    .query(`SELECT * FROM TASK WHERE task_id = ${req.params.id}`);
  const task = result[0];
  res.send(task);
});

taskRouter.post("/tasks", (req, res) => {
  const body = { ...req.body };
  dbConnection.promise()
    .query(`INSERT INTO TASK (creation_date, description, estimated_time, name, status, time_spent, user_story_id, user_id) 
            VALUES('${body.creationDate}', '${body.description}', ${body.estimatedTime}, '${body.name}','${body.status}', 
            ${body.timeSpent}, ${body.userStoryId}, ${body.userId})`);
});

taskRouter.patch("/tasks/:id", (req, res) => {});

taskRouter.delete("/tasks/:id", (req, res) => {
  dbConnection
    .promise()
    .query(`DELETE FROM TASK WHERE task_id = ${req.params.id}`);
  res.send(`Task with id: ${req.params.id} is now deleted`);
});
