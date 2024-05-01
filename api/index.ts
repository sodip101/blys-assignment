import express, { Express } from "express";
import dotenv from "dotenv";

import router from "../src/routes";

dotenv.config({ path: "./.env" });

const app: Express = express();
app.use(express.json());
const port = process.env?.PORT ?? 3000;

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running at: https://localhost:${port}`);
});

export default app;
