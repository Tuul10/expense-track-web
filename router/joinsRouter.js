import express from "express";
import { getJoin } from "../controller/joins/getJoin";

export const joinsRouter = express.Router();

joinsRouter.get("/", getJoin);
