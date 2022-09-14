import { Router } from "express";

export const storyRouter = Router();


storyRouter.get("/stories", (req, res)=>{
    
    res.send("stories")
})

storyRouter.get("/stories/:id", (req, res)=>{
    
})

storyRouter.post("/stories", (req, res)=>{
    
})

storyRouter.patch("/stories/:id", (req, res)=>{
    
})

storyRouter.delete("/stories/:id", (req, res)=>{
    
})
