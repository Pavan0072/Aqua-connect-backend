const User=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


const register=async (req,res)=>{
    try{
        const salt=8
        const {username,email,password,phone,role}=req.body
        const hashedPassword= await bcrypt.hash(password,salt)
        const newUser=new User({username,email,password:hashedPassword,phone,role})
        const result=await newUser.save()
        res
            .status(201)
            .json({
            message:`user has been created successfully `,
            data:result
        })
    }
    catch(err){
        res
        .status(500)
        .json({message:`something went wrong`,
            error:err
        })
        
    }



}
const login=async(req,res)=>{
    const{username,password}=req.body;
    const user=await User.findOne({username})
    if(!user){
        return res.status(400).json({message:`user name ${username} not found`})
    }

    const ismatch=bcrypt.compare(password,user.password)
    if(!ismatch){
        return res.status(404).json({message:`invalid credentials`})
    }
    const token=jwt.sign(
        {user:user.username,id:user._id,role:user.role},
        process.env.JWT_SECERET,
        {expiresIn:'1h'}
    
    )
    res.status(200).json({token})

}

module.exports={login,register}