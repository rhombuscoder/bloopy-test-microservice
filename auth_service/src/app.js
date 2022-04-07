const express = require('express')
const dbConnect = require('../dbConnect.js');
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/authRoutes.js')
//Routes
dbConnect.connectDB()
app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)


app.listen(3000,() => {
    console.log("Server is running")
});


