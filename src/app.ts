import express from "express";
import "express-async-errors";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config()

import { routes } from "./router";
import { CaptureError } from "./err/CaptureError";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

const captureError = new CaptureError();

app.use(captureError.execute);

export { app };
