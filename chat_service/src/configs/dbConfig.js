const mongoose = require("mongoose");

function connectDb() {
  let connectionString =
    "mongodb+srv://admin:12345@cluster0.xlwnj.mongodb.net/Bloopy?retryWrites=true&w=majority";
  try {
    mongoose.connect(connectionString);
    console.log("Db Connected");
  } catch (err) {
    throw err;
  }
}

module.exports = { connectDb };
