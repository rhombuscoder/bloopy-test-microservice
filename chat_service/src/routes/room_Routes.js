const express = require('express')
const router = express.Router()
const {JoinRoom,SendMessage,GetRooms} = require('../controller/room_Controllers.js');

//get rooms details for the user
router.post('/',async (req,res) => {
    try{
        console.log(req.body)
        const userId = req.body.userId
        const roomLists = await GetRooms(userId)
        res.status(200).json({
            success: 'Success',
            roomLists: roomLists
        })
    }catch(err){
        console.log(err)
        res.status(404).json({
            error: err
        })
    }
});

router.post('/join_room', async (req,res) => {
    try{
        const rooms_Parameters = {
            room_name : req.body.room_name,
            description : req.body.description,
            participents : req.body.participents,
            room_icon : req.body.room_icon,
            createdBy : req.body.createdBy,
            conversations: []
          
        }
        console.log(req.body)
        const room = await JoinRoom(rooms_Parameters)
        if(room != null){
            res.status(200).json({
                success: 'Success',
                room: room
            })
        }
        else{
            res.status(200).json({
                success: 'Success',
                room: []
            })
        }
    
        
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            error: err
        })
    }
});

router.post('/send_message', async (req,res) => {
    try{
        const rooms_Parameters = {
            content: req.body.content,
            room_ref: req.body.room_ref
        }
        const room = await SendMessage(rooms_Parameters)
        res.status(200).json({
            success: 'Success',
            room: room
        })
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            error: err
        })
    }
});

module.exports = router