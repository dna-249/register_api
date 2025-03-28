const mongoose = require("mongoose")



const student= mongoose.Schema({

        adm:{type:String},
        name:{type:String},
        user:{type:String},
        password:{type:String},
        email:{type:String},
        subject:[{
                eng:{type:String},
                math:{type:String},
                chem:{type:String},
                phy:{type:String},
                bio:{type:String},
        }],
        attend:[{
                date:{type:String},
                mon:{type:String},
                tue:{type:String},
                wed:{type:String},
                thu:{type:String},
                fri:{type:String},
        }],          
        exam:[{
                eng:{type:String},
                math:{type:String},
                chem:{type:String},
                phy:{type:String},
                bio:{type:String},
        }],
        test:[{
                eng:{type:String},
                math:{type:String},
                chem:{type:String},
                phy:{type:String},
                bio:{type:String},
        }],
        assess:[{
                eng:{type:String},
                math:{type:String},
                chem:{type:String},
                phy:{type:String},
                bio:{type:String},
        }],
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
                };