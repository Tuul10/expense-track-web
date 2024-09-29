import express from "express";
import { getRecord } from "../controller/records/getRecord";

export const recordsRouter = express.Router();

recordsRouter.get("/", getRecord);
