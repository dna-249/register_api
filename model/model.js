const mongoose = require("mongoose")


const Subject = mongoose.Schema({
                eng:{type:String},
                math:{type:String},
                chem:{type:String},
                phy:{type:String},
                bio:{type:String},
                }
)

const Exam = mongoose.Schema({
        eng:{type:String},
        math:{type:String},
        chem:{type:String},
        phy:{type:String},
        bio:{type:String},
        }
)
const Test = mongoose.Schema({
        eng:{type:String},
        math:{type:String},
        chem:{type:String},
        phy:{type:String},
        bio:{type:String},
        }
)

const Assess = mongoose.Schema({
        eng:{type:String},
        math:{type:String},
        chem:{type:String},
        phy:{type:String},
        bio:{type:String},
        }
)
const Attend = mongoose.Schema({
        date:{type:String},
        mon:{type:String},
        tue:{type:String},
        wed:{type:String},
        thu:{type:String},
        fri:{type:String},
        }
)
const student= mongoose.Schema({

        adm:{type:String},
        name:{type:String},
        user:{type:String},
        password:{type:String},
        email:{type:String},
        subject:[Subject],
        attend:[Attend],          
        exam:[Exam],
        test:[Test],
        assess:[Assess],
})

const staff = mongoose.Schema({
        name:{type:String},
        user:{type:String},
        password:{type:String},
        email:{type:String},
})

const management = mongoose.Schema({
        name:{type:String},
        user:{type:String},
        password:{type:String},
        email:{type:String},
})

const Student = mongoose.model("student",student)
const Staff = mongoose.model("staff",staff)
const Management = mongoose.model("Management",management)

module.exports = {Staff,
                  Student,
                  Management,
                  Subject,
                  Attend,
                  Assess,
                  Test,
                  Exam
                };