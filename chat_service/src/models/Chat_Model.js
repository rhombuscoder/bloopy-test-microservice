const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MessageSchema = new Schema({
    content : {
        type: String,
        required : true
    },
},{
    timestamps :true
})



const Chat = new  Schema({
    messageList : [{type: Schema.Types.ObjectId, ref: 'Message'}],
    room_ref : [{type: Schema.Types.ObjectId, ref: 'Room'}] 
}, {
    timestamps: true
});
module.exports = {
    Message : mongoose.model('Message',MessageSchema),
    Chat :  mongoose.model('Chat', Chat)
}