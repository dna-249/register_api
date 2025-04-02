const jwt = require("jsonwebtoken")
const {Staff} =require("../model/model")
const {Management} =require("../model/model")
const {Student} =require("../model/model")
exports.staffVerify = async (req,res,next)=>{
    const {header} = req.body

    try {
       const token = await header;
       if(!token){
        console.log("access denied")
       } 
       const verified = jwt.verify(token, process.env.secret)
       req.name = verified;
       console.log(token)
       console.log("access granted")
       res.send(res.json("access granted"))
       next()
    } catch (error) {
        console.log(error)
    }
}

exports.managementVerify = async (req,res,next)=>{
    const {header} = req.body

    try {
       const token = await header;
       if(!token){
        console.log("access denied")
       } 
       const verified = jwt.verify(token, process.env.secret)
       req.name = verified;
       console.log(token)
       console.log("access granted")
       res.send(res.json("access granted"))
       next()
    } catch (error) {
        console.log(error)
    }
}

exports.studentVerify = async (req,res,next)=>{
    const {header,name} = req.body

    try {
       const token = await header;
       const student = await Student.findOne({name:name})
       if(!token){
        console.log("access denied")
       } 
       const verified = jwt.verify(token, process.env.secret)
       req.name = verified;
       res.send(res.json(student))
       next()
    } catch (error) {
        console.log(error)
    }
}