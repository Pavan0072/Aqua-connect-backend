const jwt=require('jsonwebtoken')

const verify=(req,res,next)=>{
    let token;
    let authHeader=req.headers.Authorization || req.headers.authorization
    if(authHeader&& authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1]
        console.log('token :',token)
        if(!token){
            res.status(401).json({"message":"no token authorization denied"})
        }
        try{
            const decode=jwt.verify(token,process.env.JWT_SECERET)
            //console.log(decode)
            
            req.user=decode;
            //console.log("the decoded user is",req.user)
            next()

        }
        catch(err){
            res.status(401).json({"message":"token is noot vaid"})
        }
    }
    else{
        res.status(401).json({"message":"no token authorization denied"})
    }


}

module.exports=verify