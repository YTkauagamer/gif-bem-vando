const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const YoutubeChat = require("youtube-chat");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(__dirname));

// ID DA LIVE
const chat = new YoutubeChat({
  liveId: "zENDZIxyDTjIxrr"
});

chat.on("start", () => {
  console.log("✅ Chat iniciado");
});

chat.on("message", (data) => {

  io.emit("mensagem", {

    nome: data.author.name,

    mensagem:
      data.messageEx || data.message,

    owner:
      data.author.isOwner || false,

    mod:
      data.author.isModerator || false,

    member:
      data.author.isMember || false

  });

});

chat.start();

server.listen(3000, () => {
  console.log("🔥 Overlay rodando em http://localhost:3000");
});
