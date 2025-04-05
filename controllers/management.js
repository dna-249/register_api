
const { Management } = require("../model/model")


const postManagement = async(req,res) => {
    const {name,password,email,user,adm,key} = req.body
     await Management.create({
                                name:name,
                                user:user,
                                password:password,
                                email:email,
                                admissions:[{adm:adm}],
                                secret:[{key:key}]
                                })
                 console.log("successfully uploaded")
                    
}

const getAllManagement = async (req,res) =>{
    try{
        const student = await Management.find({})
        res.json(student)
    }catch(error){
        res.status(500).json({message:error.message})
    } 
    
}

const getOneManagement  =  async(req,res)=>{
    try{
    const {id} = req.params;
    const student = await Management.findById(id)
    res.status(200).json(student)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const putOneManagement =  async(req,res)=>{
    try {
        const {id}=req.params
        const student = await Management.findByIdAndUpdate(id, req.body)
        
        if(!student){
            res.status(404).json("student not found")
        }

        res.status(200).json(student)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

const putPullManagement = async (req,res) => {
    const {_id} = req.params;
    const {_id2} = req.params;
    const {eng,math,phy,chem,bio} = req.body;
      await Management.findOneAndUpdate({_id},
        {$pull:
          {admissions:{_id:_id2}}
      })
                    res.send("successfully uploaded")
                    
}

const putPushManagement = async (req,res) => {
    const {_id} = req.params;
    const {adm} = req.body;
      await Management.findOneAndUpdate({_id},
        {$push:
            {admissions:{adm:adm}}
        }
      )
                    console.log(res.json())
                    
}

const deleteOneManagement =  async(req,res)=>{
    try {
        const {id}=req.params
        const student = await Management.findByIdAndDelete(id, req.body)

        if(!student){
            res.status(404).json("student not found")
        }
        res.status(200).json(product)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

module.exports = {
    getOneManagement, 
    putOneManagement, 
    getAllManagement,
     postManagement,
     putPullManagement,
      putPushManagement,
       deleteOneManagement
}