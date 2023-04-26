const express=require('express')

/*    Connecting Mongoose    */
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/student')

const app=express()
const port=8000

/* Importing Routes From Routes Folder */
const router=require('./routes/controller.js')

app.use('/',router)
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})