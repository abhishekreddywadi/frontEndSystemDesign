const express = require("express");

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

// Middleware to log request details

app.use((req, res, next) => {
  console.log(`Method: ${req.method}, URL: ${req.url}, IP: ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
