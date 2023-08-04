const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
//
const userRoutes = require("./router/auth");
//
const app = express();
dotenv.config();
const port = 3007;

//
// app.get("/", (req, res) => {
//   res.send("Hello World12!");
// });

//
//mongoDB cloud
let uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.te788iv.mongodb.net/assignment-04-aug-23?retryWrites=true&w=majority`;
//
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//
app.use("/user", userRoutes);
//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
