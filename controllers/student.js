const mongoose = require('mongoose');
const {Student} = require("../model/model")


const postStudent = async(req,res) => {
    const {name,password,email,user,adm,
           eng,math,chem,phy,bio,
           mon,tue,wed,thu,fri,date
    } = req.body
     await Student.create({
            adm:adm,
            name:name,
            user:user,
            password:password,
            email:email,
            
            subject:[{
                eng:eng,
                math:math,
                chem:chem,
                phy: phy,
                bio:bio,
                    }],
    
            attend:[{
                    date:date,
                    mon:mon,
                    tue:tue,
                    wed:wed,
                    thu:thu,
                    fri:fri,
                    }],
                            
            exam:[{
                eng:eng,
                math:math,
                chem:chem,
                phy: phy,
                bio:bio
                    }],
    
            test:[{
                eng:eng,
                math:math,
                chem:chem,
                phy: phy,
                bio:bio,
                    }],
            assess:[{
                eng:eng,
                math:math,
                chem:chem,
                phy: phy,
                bio:bio,
                }],
                
                 })
                 res.send("successfully uploaded")
                    
}

const getAllStudent = async (req,res) =>{
    try{
        const student = await Student.find({})
        res.json(student)
    }catch(error){
        res.status(500).json({message:error.message})
    } 
    
}

const getOneStudent =  async(req,res)=>{
    try{
    const {id} = req.params;
    const student = await Student.findById(id)
    res.status(200).json(student)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const putOneStudent =  async(req,res)=>{
    try {
        const {id}=req.params
        const student = await Student.findByIdAndUpdate(id, req.body)
        
        if(!student){
            res.status(404).json("student not found")
        }

        res.status(200).json(student)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

const putPullStudent = async (req,res) => {
    const {_id} = req.params;
    const {_id2} = req.params;
    const {eng,math,phy,chem,bio} = req.body;
      await Student.findOneAndUpdate({_id},
        {$pull:
          {subject:{_id:_id2}}
      })
                    res.send("successfully uploaded")
                    
}

const putPushStudent = async (req,res) => {
    const {_id} = req.params;
    const {name,email,user,password} = req.body;
      await Student.findOneAndUpdate({_id},
        {$push:
          {
            subject:{
                eng:name,
                math:name,
                chem:name,
                phy:name,
                bio:name,
                },
        }
      })
                    console.log(res.json())
                    
}

const deleteOneStudent =  async(req,res)=>{
    try {
        const {id}=req.params
        const student = await Student.findByIdAndDelete(id, req.body)

        if(!student){
            res.status(404).json("student not found")
        }
        res.status(200).json(product)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

module.exports = {
    getOneStudent, 
    getAllStudent,
     postStudent,
     putPullStudent, 
     putPushStudent,
     putOneStudent,
      deleteOneStudent
}