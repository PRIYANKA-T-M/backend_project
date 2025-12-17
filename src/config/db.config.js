//all the database connection will be stored on worked o
const mongoose=require('mongoose')
const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODBURL)
        console.log("The databse is created successfuly")

    }
    catch(error){
        console.error("mongo db connection failed")
        process.exit(1);

    }
}
module.exports=connectdb;
