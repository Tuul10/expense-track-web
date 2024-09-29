import express from "express";
import { getCategory } from "../controller/categories/getCategory";
import { postCategory } from "../controller/categories/postCategory";
import { updateCategory } from "../controller/categories/updateCategory";
import { deleteCategory } from "../controller/categories/deleteCategory";

export const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.post("/", postCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);
