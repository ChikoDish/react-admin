import config from "./config/config.js";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";

const port = config.PORT;
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
const uri = config.DBPATH;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    app.listen(port);
    console.log(`app is running on ${port} in ${config.NODE_ENV}`);
  },
  (err) => {
    /** handle initial connection error */
    console.log(err);
  }
);
export default app;
