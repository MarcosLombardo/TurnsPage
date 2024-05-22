import turnsRouter from "./turnsRouter";
import usersRouter from "./usersRouter";
import { Router } from "express";

const indexRouter: Router = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/turns", turnsRouter);

export default indexRouter;
