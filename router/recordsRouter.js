import express from "express";
import { getRecord } from "../controller/records/getRecord";
import { postRecord } from "../controller/records/postRecord";

export const recordsRouter = express.Router();

recordsRouter.get("/", getRecord);
recordsRouter.post("/", postRecord);
