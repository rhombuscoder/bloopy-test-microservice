const mongoose = require('mongoose')

 const connectDB = async () => {
    let connectionString = 'mongodb+srv://admin:12345@cluster0.xlwnj.mongodb.net/Bloopy?retryWrites=true&w=majority'
    try{
        await mongoose.connect(connectionString,{
            
        })
        console.log('DbConnected')
    }catch(err){
        console.error(err)
    }
    
}

module.exports = {connectDB}