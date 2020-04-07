const Appoiment= require('../models/appoiment');
const Service= require('../models/service');
const User = require('../models/user');
const path = require('path');
const { mongoose } = require('mongoose');

const appoimentController ={};

appoimentController.getAppoiments= async(req, res)=>{
  await Appoiment.find({},function(err, appoiments) {
    Service.populate(appoiments, {path: "serviceId"},function(err, appoiments){
        res.status(200).send(appoiments);
       }); 
      
   });


}


appoimentController.createAppoiment=async(req, res)=>{
    const appoiment= new Appoiment({
       
        employeeId:req.body.employeeId,
        clientId:req.body.clientId,
        serviceId:req.body.serviceId,
        date:req.body.date,
  
       

    });

    await appoiment.save();
    res.json({
       'status': 'upload'
    });
}

appoimentController.getAppoiment= async(req,res)=>{
   const appoiment= await Appoiment.findById(req.params.id);
   res.json(appoiment);
}


appoimentController.editAppoiment= async(req, res)=>{
    const {id}= req.params;
    const appoiment={
      
        clientId:req.body.clientId,
        serviceId:req.body.serviceId,
        date:req.body.date,
       
    }

    await Appoiment.findByIdAndUpdate(id,{$set:appoiment},{new:true});

    res.json({'status':'Appoiment update'});
};

appoimentController.deleteAppoiment= async (req, res)=>{

    const {id}= req.params;
    await Appoiment.findByIdAndDelete(id);

    res.json({
        'status': 'Appoiment '+ id + ' deleted'
    })
}

module.exports= appoimentController;