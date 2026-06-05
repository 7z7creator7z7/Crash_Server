const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server,{
  cors:{origin:"*"}
});

server.listen(process.env.PORT || 3000);

io.on("connection",(socket)=>{
  console.log("Connected");
});
