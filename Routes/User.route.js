
const express=require("express")
const userRouter=express.Router()
const jwt=require("jsonwebtoken")
const {UserModel}=require("../modal/Users.model")

const bcrypt=require("bcrypt")


/*userRouter.get("/",async(req,res)=>{
    try {
        let query=req.query
        
        const users=await UserModel.find( query)
     
res.send(users )
   
    } catch (error) {
        res.send({"msg":"Cannot get users", "error":error.message})  
    }

}) */






userRouter.post("/register", async(req,res)=>{
    const {name,email,pass}=req.body
    try {
        bcrypt.hash(pass, 5,async (err, hash)=> {
            if(err){
                console.log("something went wrong",err)
            }else{
                const user= new UserModel({name,email,pass:hash})
                await user.save()
                res.send("users has been registerd")  
            }
        })
       
    } catch (error) {
      res.send({"msg":"Cannot register", "error":error.message})  
    }
   

})



userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
   
    try {
       
       const user=await UserModel.find({email})
       if(user.length>0){
        bcrypt.compare(pass,user[0].pass , function(err, result) {
            if(result){
                const token = jwt.sign({ userID:user[0]._id }, 'masai');
                res.send({user,token:token})
            }
        })
       
       }else{
        res.send("Wrong credenitial")
       }

    } catch (error) {
        console.log(error,"something went wrong")
    }
})





/*userRouter.patch("/update/:id",async(req,res)=>{
let ID=req.params.id
const payload=req.body
try {
    await UserModel.findByIdAndUpdate({_id:ID},payload)
    res.send("user has been updated")
} catch (error) {
    res.send({"msg":"Cannot updated users", "error":error.message})  
}

})


userRouter.delete("/delete/:id",async(req,res)=>{
    let ID=req.params.id
   
    try {
        await UserModel.findByIdAndDelete({_id:ID})
        res.send("user has been deleted")
    } catch (error) {
        res.send({"msg":"Cannot updated users", "error":error.message})  
    }
    
    })*/
    
module.exports={
    userRouter
}