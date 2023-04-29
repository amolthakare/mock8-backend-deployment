const jwt = require("jsonwebtoken");
require('dotenv').config();

const authenticate = (req,res,next)=>{
    const token = req.headers.authenticate
    if(token){
        const decoded = jwt.verify(token,process.env.key);
        if(decoded){
            // const userID = decoded.userID;
            next();
        }
        else{
            res.send("Invalid Token please login first");
        }
    }
    else{
        res.send({msg:"Please login first"});
    }
}

module.exports={
    authenticate
}