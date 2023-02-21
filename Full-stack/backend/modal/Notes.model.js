const mongoose=require("mongoose")
const userSchema=mongoose.Schema({

    title:{type:String,required:true},
    
    body:{type:String,required:true},
    user:{type:String},
   
},
{
    versionKey:false
}

)

const NoteModel=mongoose.model("notes",userSchema)

module.exports={
   
    NoteModel
    
    }