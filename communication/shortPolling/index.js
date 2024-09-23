const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
let data = "initial data";

app.use(express.json());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/getData", (req, res) => {
  res.send({ data });
});
app.get("/updatedData", (req, res) => {
  data = "updated data for ";
  res.send({ data });
});
app.listen(4002, () => {
  console.log("Server is running on port 4002");
});
