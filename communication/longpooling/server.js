const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
let data = "initial data";
let waitList = [];

app.use(express.json());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    waitList.push(res);
  }
});
app.get("/updatedData", (req, res) => {
  data = req.query.data;
  while (waitList.length > 0) {
    const client = waitList.shift();
    client.json({ data });
  }
});
app.listen(4002, () => {
  console.log("Server is running on port 4002");
});
