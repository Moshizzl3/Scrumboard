import { Router } from "express";
import { dbConnection } from "../data/db.js";

export const taskRouter = Router();


taskRouter.get("/tasks", (req, res) =>{
    res.send("heeej")
})

taskRouter.get("/tasks/:id", (req, res) =>{

})

taskRouter.post("/tasks", (req, res) =>{

    const body = {...req.body}

    dbConnection.promise().query(`insert into task (name, description,estimated_time, time_spent) values('${body.name}', '${body.description}', 0, 0)`)

})

taskRouter.patch("/tasks/:id", (req, res) =>{

})

taskRouter.delete("/tasks/:id", (req, res) =>{

})
