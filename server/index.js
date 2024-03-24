// server.js
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5174", "http://localhost:5174/home"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data.room);
    console.log(`User ${socket.id} joined room ${data.room}`);
  });

  socket.on("send_message", (data) => {
    io.to(data.room).emit("message", data); // Emit "message" event to all clients in the room
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
