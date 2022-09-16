import { Router } from "express";
import { dbConnection } from "../data/db.js";

export const storyRouter = Router();

storyRouter.get("/stories", async (req, res) => {
  const result = await dbConnection.promise().query(`SELECT * FROM user_story`);
  const stories = result[0];
  res.status(200).send(stories);
});

storyRouter.get("/stories/:id", async (req, res) => {
  const result = await dbConnection
    .promise()
    .query(
      "SELECT * FROM user_story WHERE user_story_id = ?",
      Number(req.params.id)
    );
  const story = result[0];
  res.status(200).send(story);
});

storyRouter.post("/stories", (req, res) => {
  const body = { ...req.body };
  dbConnection.query(
    "INSERT INTO user_story (creation_date, description, name, status, story_points, sprint_id) VALUES(?,?,?,?,?,?)",
    [
      body.creationDate,
      body.description,
      body.name,
      body.status,
      body.storyPoints,
      body.sprintId,
    ],
    function (error, results, fields) {
      const message = {
        message: `Story created with id: ${results.insertId}`,
        data: {
          id: results.insertId,
          ...body,
        },
      };
      res.status(201).send(message);
    }
  );
});

storyRouter.patch("/stories/:id", (req, res) => {}); //TODO

storyRouter.delete("/stories/:id", (req, res) => {
  dbConnection
    .promise()
    .query("DELETE FROM user_story WHERE user_story_id = ?", Number(req.params.id));
  res.status(200).send(`user story with id: ${req.params.id} is now deleted`);
});
