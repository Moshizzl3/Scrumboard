import { Router } from "express";
import { dbConnection } from "../data/db.js";

export const storyRouter = Router();


storyRouter.get("/stories", async (req, res)=>{
    
    const result = await dbConnection.promise().query(`SELECT * FROM user_story`)
    const stories = result[0];
    res.send(stories)
})

storyRouter.get("/stories/:id", (req, res)=>{
    
})

storyRouter.post("/stories", (req, res)=>{
    
})

storyRouter.patch("/stories/:id", (req, res)=>{
    
})

storyRouter.delete("/stories/:id", (req, res)=>{
    
})
