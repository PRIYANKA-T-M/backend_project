const userservices=require('../services/users.services')
let finalusers=async(req,res)=>{
    let data=await userservices.fetchusers();
    res.json(data)
}
// module.exports={finalusers}


const signup = async (req, res) => {
  try {
    await userservices.signup(req.body);
    res.json({ msg: "User registered" });
  } catch (e) {
    res.json({ msg: e.message });
  }
};

const signin = async (req, res) => {
  try {
    const token = await userservices.signin(req.body, process.env.SECRET_KEY);
    res.json({ msg: "Login success", token });
  } catch (e) {
    res.json({ msg: e.message });
  }
};

module.exports = { finalusers, signup, signin };  
