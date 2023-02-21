const express=require("express")
const {connaction}=require("./db")
const {userRouter}=require("./Routes/User.route")
const { noteRouter}=require("./Routes/Note.route")
const {authnicate}=require("./middelwares/authnicate.middelware")
const app=express()
app.use(express.json())

app.use("/users",userRouter)
app.use(authnicate)
app.use("/notes",noteRouter)
app.listen("4700",async ()=>{
    try {
     await  connaction
     console.log("port connected to db")
    } catch (error) {
     console.log(error)
    }
    
    console.log(`port running on 4700`)
 })