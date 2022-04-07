exports = module.exports = function (http) {
  const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:3006",
      methods: ["GET", "POST"],
    },
  });
  return io;
};
