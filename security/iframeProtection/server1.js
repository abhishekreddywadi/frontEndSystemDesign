const express = require("express");
const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());
// app.use(express.static());

// Route to handle GET request for '/api/users'
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index1.html");
});
app.listen(3001, (req, res) => {
  console.log("server listening on");
});
