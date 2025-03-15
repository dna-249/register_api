
const express  = require("express");
const Port = process.env.PORT || 3000
const app = express()
const cors = require("cors");
const mongoose = require("mongoose")

const corsConfig = {
    origin : ["https://cloud-school-lifecamp.vercel.app"],
    credential : true,
    methods : ["GET","POST","PUT","DELETE"]
}

app.options("",cors(corsConfig))
app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
mongoose.connect("mongodb+srv://danamonuraa:bkJ1MVARzko9ldt9@dnaapi.hjo9y.mongodb.net/product?retryWrites=true&w=majority&appName=dnaApi").then(()=> console.log("connected to database")).catch(err => console.log(err))
const Datas = mongoose.Schema({
    name:{type:String},
    password:{type:String},
    email:{type:String},
subject:[{
       eng:{type:String},
       math:{type:String},
       chem:{type:String},
       phy:{type:String},
       bio:{type:String},
   }]})
const Data = mongoose.model("attasfiyah",Datas)

app.get("/",(req,res)=>{
    res.send("hello from backend")
    
})

app.get('/api/users', async (req,res) =>{
    try{
        const product = await Data.find({})
        res.json(product)
    }catch(error){
        res.status(500).json({message:error.message})
    } 
    
})


app.post('/post',(req,res) => {
    const {name,password,email,eng,math,phy,chem,bio} = req.body
    Data.create({name:name,
                 password:password,
                 email:email,
                 subject:[{
                 eng:eng,
                 math:math,
                 chem:chem,
                 phy:phy,
                 bio:bio}]})
                 res.send("successfully uploaded")
                    
})
app.put('/subject/:_id/:_id2',async (req,res) => {
    const {_id} = req.params;
    const {_id2} = req.params;
    const {eng,math,phy,chem,bio} = req.body;
      await Data.findOneAndUpdate({_id},
        {$pull:
          {subject:{_id:_id2}}
      })
                    res.send("successfully uploaded")
                    
})



app.get("/users/:id", async(req,res)=>{
    try{
    const {id} = req.params;
    const product = await Data.findById(id)
    res.status(200).json(product)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})


app.put("/user/:id", async(req,res)=>{
    try {
        const {id}=req.params
        const product = await Data.findByIdAndUpdate(id, req.body)
        
        if(!product){
            res.status(404).json("product not found")
        }

        res.status(200).json(product)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
})

app.delete("/user/:id", async(req,res)=>{
    try {
        const {id}=req.params
        const product = await Data.findByIdAndDelete(id, req.body)

        if(!product){
            res.status(404).json("product not found")
        }
        res.status(200).json(product)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
})


app.listen(Port, ()=>{
    console.log("server is Running")
    
})