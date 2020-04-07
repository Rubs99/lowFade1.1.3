const mongoose =require('mongoose');
const {Schema}= mongoose;
mongoose.set('useCreateIndex', true, 'useFindAndModify', false);

const appoimentSchema= new Schema({
    id:{type:Number},
    employeeId:{type: Schema.ObjectId, ref: "User" },
    clientId:{type:Schema.ObjectId,ref:"User"},
    serviceId: {type: Schema.ObjectId, ref: "Service"},
    date:{type:Date},
   
    created_at:{type:Date,default: Date.now(),required:true}
});

module.exports=mongoose.model('Appoiment',appoimentSchema);