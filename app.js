const express = require("express");
const chalk = require("chalk");

const connectToDb = require("./DB/dbService");
const router = require("./router/router");
const corsMiddleware = require("./middlewares/cors");
const { handleError } = require("./utils/handleErrors");
const morgan = require("morgan");
const loggerMiddleware = require("./logger/loggerService");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT ||8181;

app.use(corsMiddleware);

app.use(express.json());

app.use(loggerMiddleware());

app.use(express.static("./public"));





app.use(router);

app.use((err, req, res, next) => {
  const message = err || "internal error of the server";
  return handleError(res, 500, message);
});

app.listen(PORT, () => {
  console.log(chalk.yellow("app is listening to port " + PORT));
  connectToDb();
});
