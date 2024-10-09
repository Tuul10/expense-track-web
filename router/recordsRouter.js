import express from "express";
import { getRecordById } from "../controller/records/getRecordById";
import { postRecord } from "../controller/records/postRecord";
import { deleteRecord } from "../controller/records/deleteRecord";
import { getRecord } from "../controller/records/getRecord";

export const recordsRouter = express.Router();

recordsRouter.get("/:id", getRecordById);
recordsRouter.get("/", getRecord);
recordsRouter.post("/:id", postRecord);
recordsRouter.delete("/:id", deleteRecord);
