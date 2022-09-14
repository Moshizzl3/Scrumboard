import { Router } from "express";
import { dbConnection } from "../data/db.js";

export const storyRouter = Router();

storyRouter.get("/stories", async (req, res) => {
  const result = await dbConnection.promise().query(`SELECT * FROM user_story`);
  const stories = result[0];
  res.send(stories);
});

storyRouter.get("/stories/:id", async (req, res) => {
  const result = await dbConnection
    .promise()
    .query(`SELECT * FROM user_story WHERE user_story_id = ${req.params.id}`);
  const story = result[0];
  res.send(story);
});

storyRouter.post("/stories", (req, res) => {
  const body = { ...req.body };
  dbConnection.promise().query(
    `INSERT INTO user_story (creation_date, description, name, status, story_points, sprint_id) 
      VALUES('${body.creationDate}', '${body.description}', '${body.name}', '${body.status}', ${body.storyPoints}, ${body.sprintId})`
  );
  res.send(body)
});

storyRouter.patch("/stories/:id", (req, res) => {});

storyRouter.delete("/stories/:id", (req, res) => {
  dbConnection
    .promise()
    .query(`DELETE FROM user_story WHERE user_story_id = ${req.params.id}`);
  res.send(`user story with id: ${req.params.id} is now deleted`);
});
