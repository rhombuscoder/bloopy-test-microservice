const { instrument } = require("@socket.io/admin-ui");

exports = module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("Client Joined", socket.id);
    socket.on("send-message", (payload) => {
      console.log("MEssage sent");
      socket.to(payload.roomName).emit("message-received", payload);
    });

    socket.on("create-room", ({ roomName }) => {
      console.log(roomName);
      socket.join(roomName);

      io.to(roomName).emit("user-joined", {
        roomName: roomName,
        roomObj: 0,
        userID: socket.id,
      });

      socket.to(roomName).emit("participant-join", {
        roomName: roomName,
        participantId: socket.id,
      });
    });

    socket.on("join-participant-room", ({ roomName }) => {
      socket.join(roomName);
      socket.to(roomName).emit("user-joined-room", {
        roomName: roomName,
        roomObj: 0,
      });
    });

    socket.on("disconnect", ({ roomName, userId }) => {
      socket.to(roomName).emit("user-disconnected", {
        message: `${userId} has left the room`,
      });
    });
  });

  instrument(io, {
    auth: false,
    namespaceName: "/",
  });
    function userJoinedRoom_Event () {
            io.on('connection',() => {
                console.log("Joined from fucjtion")
            })
    }
};


