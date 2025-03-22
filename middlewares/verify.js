const jwt = require("jsonwebtoken")

exports.verify = async (req,res,next)=>{
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