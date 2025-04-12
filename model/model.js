const mongoose = require("mongoose")



const student= mongoose.Schema({

        adm:{type:String},
        name:{type:String},
        user:{type:String},
        password:{type:String},
        phone:{type:String},
        email:{type:String},
        class:{type:String},
        attend:[{
                date:{type:String},
                mon:{type:String},
                tue:{type:String},
                wed:{type:String},
                thu:{type:String},
                fri:{type:String},
        }], 
        Eng:[{
                exam:{type:String},
                test:{type:String},
                ca:{type:String},
                ass:{type:String},
        }],
                 
        math:[{
                exam:{type:String},
                test:{type:String},
                ca:{type:String},
                ass:{type:String},
        }],
        chem:[{
                exam:{type:String},
                test:{type:String},
                ca:{type:String},
                ass:{type:String},
        }],
        phy:[{
                exam:{type:String},
                test:{type:String},
                ca:{type:String},
                ass:{type:String},
        }],
        bio:[{
                exam:{type:String},
                test:{type:String},
                ca:{type:String},
                ass:{type:String},
        }]
})

const staff = mongoose.Schema({
        key:{type:String},
        name:{type:String},
        user:{type:String},
        class:{type:String},
        password:{type:String},
        phone:{type:String},
        email:{type:String},
})

const management = mongoose.Schema({
        key:{type:String},
        name:{type:String},
        user:{type:String},
        password:{type:String},
        phone:{type:String},
        email:{type:String},
        admissions:[{ adm:{type:String} }],
        management:[{  key:{type:String}  }],
        staff:[{  key:{type:String}  }],
        classes:[{  key:{type:String}  }]
})

const Student = mongoose.model("student",student)
const Staff = mongoose.model("staff",staff)
const Management = mongoose.model("Management",management)

module.exports = {Staff,
                  Student,
                  Management,
                };