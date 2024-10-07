import express from "express";
import { getRecord } from "../controller/records/getRecord";
import { postRecord } from "../controller/records/postRecord";
import { deleteRecord } from "../controller/records/deleteRecord";

export const recordsRouter = express.Router();

recordsRouter.get("/", getRecord);
recordsRouter.post("/", postRecord);
recordsRouter.delete("/:id", deleteRecord);
