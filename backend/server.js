const express = require("express");
const app = express();
const io = require("socket.io");

app.get("/", (req, res) => {
  res.send("its works");
});

const Port = process.env.port || 5000;
app.listen(Port, () => {
  console.log("Server is running");
});
