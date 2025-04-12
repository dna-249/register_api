const jwt = require("jsonwebtoken")
const {Staff} =require("../model/model")
const {Management} =require("../model/model")
const {Student} =require("../model/model")
exports.staffLogin = async (req,res,next) =>{
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

exports.managementLogin = async (req,res,next) =>{
  try {
    const {name, password,user,email} = req.body;
    const management = await Management.findOne({name:name})
    if(!management) {
        res.status(404).json("not found")
    }
    const token = jwt.sign({name:management},process.env.secret)
    console.log(token)
    res.send(res.json(token))
    console.log(management)
    next()
  } catch (error) {
   console.log(error) 
  }
}

exports.studentLogin = async (req,res,next) =>{
  try {
    const {name, password,user,email} = req.body;
    const student = await Student.findOne({name:name})
    if(!student) {
        res.status(404).json("not found")
    }
    const token = jwt.sign({name:student},process.env.secret)
    res.send(res.json(token)) 
    next()
  } catch (error) {
   console.log(error) 
  }
}
exports.studentSignup = async (req,res,next) =>{
  try {
    const {keys} =req.params
    const {value} =req.params
    const {key} = req.body
    const admission = await Management.findOne({[`${keys}.${value}`]:key})
    if(!admission) {
      res.status(404).json("not found")
  }
    jwt.sign({[`${keys}.${value}`]:admission}, process.env.secret); 
  next()
  } catch (error) {
    console.log(error)
  }
}