const express = require("express");
const Auth = require("../interfaces/Auth");


const router = express.Router()

router.post('/register', async (req,res) => {
    Auth.register(req.body,res) 
});

router.post('/login', async (req,res) => {
    Auth.login(req.body,res) 
});

module.exports = router