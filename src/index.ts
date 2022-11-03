import chalk from "chalk";
import express from "express";
import morgan from "morgan";
import things from "./data/things.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();
const { log } = console;

const server = app.listen(port, () => {
  log(chalk.yellow(`Server listening on: http://localhost:${port}`));
});

app.use(morgan("dev"));
app.use(express.json());
app.get("/things", (req, res, next) => {
  res.status(200).json(things);
});

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

server.on("error", (error) => {
  log(chalk.red("Error on starting server", error.message));
});
