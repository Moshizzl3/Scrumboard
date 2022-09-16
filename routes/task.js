import { Router } from "express";
import { dbConnection } from "../data/db.js";

export const taskRouter = Router();

taskRouter.get("/tasks", async (req, res) => {
  const result = await dbConnection.promise().query(`SELECT * FROM TASK`);
  const tasks = result[0];
  res.status(200).send(tasks);
});

taskRouter.get("/tasks/:id", async (req, res) => {
  const result = await dbConnection
    .promise()
    .query("SELECT * FROM TASK WHERE task_id = ?", Number(req.params.id));

  const task = result[0];
  res.status(200).send(task);
});

taskRouter.post("/tasks", (req, res) => {
  const body = { ...req.body };
  dbConnection.query(
    `INSERT INTO task (creation_date, description, estimated_time, name, status, time_spent, user_story_id, user_id) 
            VALUES(?,?,?,?,?,?,?,?)`,
    [
      body.creationDate,
      body.description,
      body.estimatedTime,
      body.name,
      body.status,
      body.timeSpent,
      body.userStoryId,
      body.userId,
    ],
    function (error, results, fields) {
      const message = {
        message: `Task created with id: ${results.insertId}`,
        data: {
          id: results.insertId,
          ...body,
        },
      };
      res.status(201).send(message);
    }
  );
});

taskRouter.patch("/tasks/:id", (req, res) => {});

taskRouter.delete("/tasks/:id", (req, res) => {
  dbConnection
    .promise()
    .query(`DELETE FROM task WHERE task_id = ${req.params.id}`);

  res.status(200).send(`Task with id: ${req.params.id} is now deleted`);
});
