const express=require("express")
const noteRouter=express.Router()

const {NoteModel}=require("../modal/Notes.model")


noteRouter.get("/",(req,res)=>{
   

})


noteRouter.post("/create",async(req,res)=>{

    const payload=req.body
    const note= new NoteModel(payload)
    await note.save()
    res.send("Note added")
})


noteRouter.delete("/delete/:id",async(req,res)=>{

    const Noteid=req.params.id
    await NoteModel.findByIdAndDelete({_id:Noteid})
    res.send("Note deleted")
})

module.exports={
    noteRouter
}