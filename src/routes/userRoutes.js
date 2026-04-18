const express=require('express')
const verifyToken=require('../middlewares/authMiddleware')
const authorizeRoles=require('../middlewares/autorizeRoles')
const router=express.Router()

//user route
router.get("/user", verifyToken,authorizeRoles('user','breeder','seller'),(req,res)=>{
    res.json({"message":'welcome user'
        
    })
})

//breeder route
router.get("/breeder",verifyToken,authorizeRoles('breeder'),(req,res)=>{
    res.json({"message":'welcome breeder'})
})
//seller route
router.get("/seller",verifyToken,authorizeRoles('seller'),(req,res)=>{
    res.json({"message":'welcome seller'})
})

module.exports=router