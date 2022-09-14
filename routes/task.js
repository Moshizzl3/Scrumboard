import { Router } from "express";
import { dbConnection } from "../data/db.js";

export const taskRouter = Router();

taskRouter.get("/tasks", (req, res) => {
  res.send("heeej");
});

taskRouter.get("/tasks/:id", (req, res) => {});

taskRouter.post("/tasks", (req, res) => {
  const body = { ...req.body };
  dbConnection.promise()
    .query(`INSERT INTO TASK (creation_date, description, estimated_time, name, status, time_spent, user_story_id, user_id) 
            VALUES('${body.creationDate}', '${body.description}', ${body.estimatedTime}, '${body.name}','${body.status}', 
            ${body.timeSpent}, ${body.userStoryId}, ${body.userId})`);
});

taskRouter.patch("/tasks/:id", (req, res) => {});

taskRouter.delete("/tasks/:id", (req, res) => {});
