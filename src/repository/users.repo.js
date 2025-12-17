const usermodel=require('../models/users.model')
/* let getalluser=()=>{
//     return usermodel.find();
 }*/
//module.exports={getalluser}



/* GET ALL USERS */
const getallusers = () => {
  return usermodel.find().select("-password");
};

/*FIND usermodel BY USERNAME*/
const findUser = (username) => {
  return usermodel.findOne({ username });
};

/*CREATE USER */
const createUser = (data) => {
  return usermodel.create(data);
};

module.exports = {
  getallusers,
  findUser,
  createUser
};
