import express  from "express";
import { userSignup } from "./user/post.js";
import { getusers } from "./user/get.js";
import { deleteUser } from "./user/delete.js";



const Route = express.Router()
Route.post("/signup", userSignup)
Route.get("/users", getusers)
Route.delete("/:id", deleteUser)



export  {Route};