const greetservices=require('../services/greet.services')
const greetcontroller=(req,res)=>{
    let greetdata=greetservices.greetdata;
    res.json({status:"hello",...greetdata})
}
module.exports={greetcontroller}