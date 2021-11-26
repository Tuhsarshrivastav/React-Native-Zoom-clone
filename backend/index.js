const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3002;
let users = [];

app.get("/", (req, res) => {
  res.send("hello World");
});

const addUser = (userName, roomId) => {
  users.push({
    userName: userName,
    roomId: roomId,
  });
};

const userLeave = (userName) => {
  users = users.filter((user) => user.userName != userName);
};

const getRoomUsers = (roomId) => {
  return users.filter((user) => user.roomId == roomId);
};

io.on("connection", (socket) => {
  socket.on("join-room", ({ roomId, userName }) => {
    if (roomId && userName) {
      socket.join(roomId);
      addUser(userName, roomId);
      socket.to(roomId).emit("user-connected", userName);

      io.to(roomId).emit("all-users", getRoomUsers(roomId));
    }

    socket.on("disconnect", () => {
      socket.leave(roomId);
      userLeave(userName);
      io.to(roomId).emit("all-users", getRoomUsers(roomId));
    });
  });
});

server.listen(port, () => {
  console.log(`Zoom Clone API listening on http://localhost:${port}`);
});
