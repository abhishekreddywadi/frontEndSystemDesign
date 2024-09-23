const express = require("express");
const { log } = require("node:console");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat", (chatMessage) => {
    console.log(chatMessage);

    io.emit("chat", chatMessage);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(4003, () => {
  console.log("server running at http://localhost:4003");
});
