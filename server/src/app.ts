import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv-flow";
dotenv.config({ silent: false });

import { requireAuth } from "./middleware/auth";

const app = express();
app.use(cors());
app.all("/api/*", requireAuth);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/health", (_req, res) => {
  res.sendStatus(200);
});

export default app;
