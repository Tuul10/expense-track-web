import express from "express";
import { userRouter } from "./router/userRouter";
import { categoryRouter } from "./router/categoryRouter";
import { recordsRouter } from "./router/recordsRouter";
import { joinsRouter } from "./router/joinsRouter";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/category", categoryRouter);
app.use("/records", recordsRouter);
app.use("/joins", joinsRouter);

const port = 8000;

app.listen(port, () => {
  console.log(`server runnimg a http://localhost:${port}/`);
});
