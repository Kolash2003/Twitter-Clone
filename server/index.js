import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./db/database.js";

dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT;

const app = express();
databaseConnection();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server in running on ${PORT}`);
});
