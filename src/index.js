import express from "express";

import { usersRouter } from "./users.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
