import express from "express";
import { getRecordById } from "../controller/records/getRecordById";
import { postRecord } from "../controller/records/postRecord";
import { deleteRecord } from "../controller/records/deleteRecord";
import { getRecord } from "../controller/records/getRecord";
import { getRecordById2 } from "../controller/records/getRecordById2";

export const recordsRouter = express.Router();

recordsRouter.get("/:id", getRecordById);
recordsRouter.get("/record/:id", getRecordById2);
recordsRouter.get("/", getRecord);
recordsRouter.post("/postRecord", postRecord);
recordsRouter.delete("/:id", deleteRecord);
