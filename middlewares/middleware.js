const jwt = require("jsonwebtoken")
const {Staff} =require("../model/model")
exports.studentLogin = async (req,res,next) =>{
  try {
    const {name, password,user,email} = req.body;
    const staff = await Staff.findOne({name:name})
    if(!staff) {
        res.status(404).json("not found")
    }
    const token = jwt.sign({name:staff},process.env.secret)
    console.log(token)
    res.send(res.json(token))
    console.log(staff)
    next()
  } catch (error) {
   console.log(error) 
  }
}
