const express = require('express')
const app = express()

app.listen(3001, (req,res)=> {
    console.log("Chat Service is listening on Port 30001")
})