import express from "express";
import { getUser } from "../controller/users/getUser";
import { postUser } from "../controller/users/postUser";
import { updateUser } from "../controller/users/updateUser";
import { deleteUser } from "../controller/users/deleteUser";
import { signIn } from "../controller/users/signIn";

export const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/", postUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/signin", signIn)
