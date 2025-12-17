const userrepo=require('../repository/users.repo')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const fetchusers=()=>{
    return userrepo.getallusers()
}
module.exports={fetchusers}

/* -------- SIGN UP -------- */
const signup = async (user) => {
  const exists = await userrepo.findUser(user.username);
  if (exists) throw new Error("User already exists");

  user.password = await bcrypt.hash(user.password, 10);
  return userrepo.createUser(user);
};

/* -------- SIGN IN -------- */
const signin = async ({ username, password }, secret) => {
  const user = await userrepo.findUser(username);
  if (!user) throw new Error("User not found");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error("Invalid credentials");

  return jwt.sign({ username }, secret, { expiresIn: "1h" });
};

module.exports = {fetchusers,signup,signin};
