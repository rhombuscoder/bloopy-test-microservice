const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Room = new Schema({
    room_name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    participents : {
        type : [{type: Schema.Types.ObjectId, ref: 'User'}],
        require: true
    },
    room_icon : {
        type: String
    },
    conversations : {
        type: [{type: Schema.Types.ObjectId, ref: 'Chat'}]
    },
    createdBy : {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Room', Room)