const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://k2subhash45:Subhash@cluster0.f8xfyd9.mongodb.net/")

const Movies=mongoose.model("Movies",{
    id:String,
    movie:String
})

module.exports=Movies