const express =require("express");
const app=express();
const cors=require("cors");
const bodyParser = require("body-parser");
const PORT=3000;
const router=require("./Router");

app.use(express.json())
app.use(router)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.listen(PORT,()=>{
    console.log(`App is listening to ${PORT}`)
})