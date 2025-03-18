const mongoose = require('mongoose');
const{ Staff} = require("../model/model")


const postStaff = async(req,res) => {
    const {name,password,email,user,staff} = req.body
     await Staff.create({

       
        name:name,
        user:user,
        password:password,
        email:email,
   
                 })
                 res.send("successfully uploaded")
                    
}

const getAllStaff = async (req,res) =>{
    try{
        const student = await Staff.find({})
        res.json(student)
    }catch(error){
        res.status(500).json({message:error.message})
    } 
    
}

const getOneStaff =  async(req,res)=>{
    try{
    const {id} = req.params;
    const student = await Staff.findById(id)
    res.status(200).json(student)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const putOneStaff =  async(req,res)=>{
    try {
        const {id}=req.params
        const student = await Staff.findByIdAndUpdate(id, req.body)
        
        if(!student){
            res.status(404).json("student not found")
        }

        res.status(200).json(student)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

const putPullStaff = async (req,res) => {
    const {_id} = req.params;
    const {_id2} = req.params;
    const {eng,math,phy,chem,bio} = req.body;
      await Staff.findOneAndUpdate({_id},
        {$pull:
          {subject:{_id:_id2}}
      })
                    res.send("successfully uploaded")
                    
}

const putPushStaff = async (req,res) => {
    const {_id} = req.params;
    const {name,email,user,password} = req.body;
      await Staff.findOneAndUpdate({_id})
                    console.log(res.json())
                    
}

const deleteOneStaff =  async(req,res)=>{
    try {
        const {id}=req.params
        const student = await Staff.findByIdAndDelete(id, req.body)

        if(!student){
            res.status(404).json("student not found")
        }
        res.status(200).json(product)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

module.exports = {
    getOneStaff,
    putOneStaff,
     getAllStaff,
      postStaff,
      putPullStaff,
       putPushStaff, 
       deleteOneStaff
}