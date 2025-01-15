const express=require("express")
const { jwtSecret } = require('../env');
const jwtToken =require("jsonwebtoken")

const generateToken=(user)=>{
return jwtToken.Sign({id:user.id,role:user.role},jwtSecret,{expiresIn:3000000} )
}
const verifyToken=(token)=>{

    try {
   return   jwtToken.verify(token,jwtSecret)
    } 
    catch (error) {
        throw new Error('Invalid token');
      }
}

module.exports={generateToken,verifyToken }