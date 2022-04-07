const mongoose = require('mongoose')

const Users = mongoose.Schema({
  
    password: {
        type: String,
        require : true,
        select : false
    },
    username: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    tokens : {
        type : Array
        
    }
},{
    timestamp :true
});




module.exports = mongoose.model('User',Users)