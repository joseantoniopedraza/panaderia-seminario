import express from "express";
import appRouter from "./api/interface/index";
import { buildDependencies } from "./api/dependencies";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, async () => {
  const dependencies = await buildDependencies();

  app.use(appRouter(dependencies));
  console.log(`Server is running at http://localhost:${port}`);
});
