import { createConnection } from "typeorm";

createConnection()
    .then(() => console.log("[DB] -> Database is connected!"))
    .catch((e) => console.log(`[DB] -> Database is nort connected! --- Error: ${e}`));