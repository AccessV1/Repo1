import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port: number = 3000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("server is working");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
