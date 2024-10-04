import express, { Application, Request, Response } from "express";
import cors from "cors";
import { errorHandlingMiddleware } from "./middleware/errorHandlingMiddleware";
import apiRouter from "./api";

const app: Application = express();
const port: number = 3000;

app.use(cors());

//  errorHandlingMiddleware has to be the last middleware intitiallized
app.use(errorHandlingMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.send("server is working");
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
