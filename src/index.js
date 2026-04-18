const express=require('express')
const dotenv=require('dotenv').config()
const dbConnect=require('./config/dbConnect')
const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes')

const app=express()



// middleware
app.use(express.json())
dbConnect()

//Routes
app.use('/api/auth',authRoutes)
app.use('/api/users/',userRoutes)

//start server

//console.log(process.cwd())

const PORT=process.env.PORT||7878 

//const conecctionstring=process.env.MONGO_URL
//console.log("INDEX:", process.env.MONGO_URL)
//console.log(`${PORT}:${conecctionstring}`)


app.listen(PORT,()=>{
    console.log("server is running on port "+PORT)

})
