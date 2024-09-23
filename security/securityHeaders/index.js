const express = require("express");
const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());
// app.use(express.static());

// Route to handle GET request for '/api/users'
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the User API!",
  });
});
app.listen(3003, () => {
  //   res.send("server listening at http://localhost3000");
  console.log("server listening at http://localhost3000");
});
