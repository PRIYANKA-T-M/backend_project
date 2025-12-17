//the controllers files is for api calls
const healthservice=require('../services/health.services')
const healthcontroller=(req,res)=>{
    let data=healthservice.healthdata;
    res.json({"status":"ok", ...data})
    
}
module.exports={healthcontroller}