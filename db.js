
const mongoose=require("mongoose")


require('dotenv').config()
    const connaction=mongoose.connect(process.env.Mongourl)




module.exports={
connaction


}