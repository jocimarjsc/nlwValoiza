import "reflect-metadata";
import "./database";

import { app } from "./app";

app.listen(process.env.PORT, () => console.log("[SV] -> Server is running!"))