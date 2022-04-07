const express = require("express");
const cors = require("cors");
const { connectDb } = require("./configs/dbConfig");
const app = express();
const http = require("http").Server(app);
const roomRoutes = require("./routes/room_Routes.js");

//Connect DB
connectDb();

//Connect Socket
const io = require("./configs/socketConfig")(http);
//Connect Socket Events
app.use(cors());
app.use(express.json());
app.use("/rooms", roomRoutes);
http.listen(3001, () => {
  console.log("Servef is listening");
});
const socketIo = require("./controller/socket_Controller.js")(io);
