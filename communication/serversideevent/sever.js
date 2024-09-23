const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("cache-control", "no-cache");
  let id = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    res.write(`data: ${randomNumber}\n\n`);
  }, 1000);
  req.on("close", () => {
    clearInterval(id);
  });
});

app.listen(4002, () => {
  console.log("Server is running on port 4002");
});
