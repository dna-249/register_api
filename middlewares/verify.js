const jwt = require("jsonwebtoken")

exports.verify = async (req,res,next)=>{

    try {
       const token = await req.headers.Authorization.split[''][1];
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