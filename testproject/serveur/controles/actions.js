import User from "../models/userShemer.js";

export const getUsers= (req,res)=>{
   User.findOne({name:req.params.name},function(err,foundUser){
      if(!err) res.send(foundUser);
      else res.send("no User matching that title");})
 
}

export const createUser = (req, res) => {
   
const newUser=new User({ name:req.body.name 
        ,password:req.body.password
         ,email:req.body.email });
 
  newUser.save((err)=>{
   if(!err) res.send("seccessfully added a new articale.");
    else res.send(err);
   })
}