const Room = require('../models/Rooms_Model')
const {Chat,Message} =  require('../models/Chat_Model')
async function JoinRoom ({room_name,description,participents,room_icon,conversations,createdBy}) {
    try{
        const  roomExist = await Room.findOne({room_name})
        if(!roomExist){
            const room = new Room({
                room_name,description,participents,room_icon,conversations,createdBy
            });
            const response = await room.save()
            return response 
        }else{
            roomExist.participents.push(createdBy)
            const response = roomExist.save()
            return response
        }
           
    }catch(err){
        throw err
    }
    
}

async function SendMessage ({content,room_ref}) {
    try{
        const message = new Message({
            content : content,
        });
        const res_Message = await message.save()
        const findChat = await Chat.findOne({room_ref})
        if(findChat){
            findChat.messageList.push(res_Message._id)
            const res_Chat = await findChat.save()
            return res_Chat
        }else{
            const chat  =  new Chat({
                messageList : [res_Message._id],
                room_ref : room_ref
            })
            const res_Chat = await chat.save()
            return res_Chat
        }
       
    }catch(err){
        throw err
    }
}

function ExitRoom () {

}

async function GetRooms(userId){
    try{
        console.clear()
        console.log("Get Rooms: " , userId)
        const roomList = await Room.findOne({createdBy : userId})
        return roomList
    }catch(err){
        throw err
    }
}

module.exports = {
    JoinRoom,SendMessage,ExitRoom,GetRooms
}