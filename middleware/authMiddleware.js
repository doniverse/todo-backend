const jwt = require('jsonwebtoken')
const asynchandler = require('express-async-handler')
const User = require('../models/user.model')


const protect = asynchandler(async (req, res, next)=>{
    let token
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try{
            token = req.headers.authorization.split(" ")[1]
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            // valid token
            req.user = await User.findById(decode.id).select("-password")

            next()
        }catch(error){
            res.status(401).json({error : "Not authorized"})
        }
    }
    if(!token){
        res.status(401).json({error: "Not authorized"})
    }
})


module.exports = { protect }