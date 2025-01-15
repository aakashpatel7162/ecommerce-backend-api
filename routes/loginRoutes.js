const express=require('express')
const router = express.Router();

const {login, rejister}=require("../middlewares/authMiddlerwares")

router.post('/', rejister)
router.post('/', login)
router.get("/",(req,res)=>{
    res.status(200).json("HI form Ecommerce Api")
})


module.exports=router