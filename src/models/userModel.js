const mongoose=require('mongoose')

const userSchema=new mongoose.Schema(
    {
       
        username:{
            type:String,
            required:true,
            trim:true,
            maxlength:[50,'name cannot be more than 50 characters']
        },
        email:{
            required:true,
            type:String,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true,
            minlength:[6,'Password must be at least 6 characters']
        },
        phone:{
            type:String,
            required:true,


        },
        role:{
            type:String,
            enum:["user",'breeder','seller'],
            default:'user'
        },
        createdAt:{
            type:Date,
            default:Date.now

        }
    },
    {
        timestamp:true
    }
    
)

module.exports=mongoose.model('User',userSchema)