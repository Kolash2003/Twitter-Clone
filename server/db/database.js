import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../db/.env",
});

const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to Mongo DB");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default databaseConnection;
