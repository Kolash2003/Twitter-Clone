import express, { urlencoded } from "express";
import dotenv from "dotenv";
import databaseConnection from "./db/database.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import tweetRouter from "./routes/tweetRoutes.js";
import cors from "cors";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tweets", tweetRouter);
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

databaseConnection();

app.listen(PORT, () => {
  console.log(`server in running on ${PORT}`);
});
