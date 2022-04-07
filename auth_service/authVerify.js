const jwt = require('jsonwebtoken')

const verifyToken = async (req,res,next) => {
    const token = req.header['authorization']
    try{
        if(!token){
            throw 'Authorization Failed'
        }
        const verifyToken = await jwt.verify(token,'secret key')
        if(!verifyToken){
            throw 'Token Invalid'
        }
        else{
            next()
        }
    }catch(err){
        res.status(403).json({
            err
        }) 
    }
   
}

module.exports = {verifyToken}