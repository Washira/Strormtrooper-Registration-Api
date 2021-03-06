let express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  dbConfig = require("./database/db");

//Express Route
const stormtrooperRoute = require("./routes/stormtrooper.route");

//Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    console.log("database successfully connected");
  },
  (error) => {
    console.log("Could not connect to database:" + error);
  }
);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/stormtrooper", stormtrooperRoute);

//PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});

//404 Error
app.use((req, res, next) => {
  next(createError(404));
});

//Error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
