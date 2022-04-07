const UserModel = require("../../models/UserModel");
const jwt = require('jsonwebtoken')

const Auth  = {
    register :async ({username,email,password},res) => {

        try{
            let token = await jwt.sign({email,username},'secret key',{expiresIn: '5m'})
            let newUser = new UserModel({
                email,
                password,
                username,
                tokens: token
            });
            const newUserObject = await newUser.save()
            res.status(200).json(newUserObject)
        }catch(err){
            res.status(404).json(err)
        }
    },

    login : async ({email,password},res) => {
        try{
            let user = await UserModel.findOne({email: email}).select('password email tokens')
            console.log(user);
            if(user){
                console.log(user.password,password)
                if(user.password !== password){
                    throw "Password does not match"
                }
                 else{
                     const payload = {
                         user_id: user._id,
                         user_email : user.email
                     }

                     const token = jwt.sign(payload,'secret key')
                     res.status(200).json({
                         token,
                          ...payload
                     });

                 }
            }else{
                throw "User not found"
            }
        }catch(err){
            res.status(404).json({
                error : err
            })
        }

    }
}

module.exports = Auth