import express from "express";
import { getCategory } from "../controller/categories/getCategory";
import { postCategory } from "../controller/categories/postCategory";

export const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.post("/", postCategory);
