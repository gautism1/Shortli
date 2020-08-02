const mongoose=require('mongoose')
const urlschema= new mongoose.Schema(
    {
         urlCode:String,
         longurl:String,
         shorturl:String,
         date:{
             type:String,
             default:Date.now
         }
    }
);
module.exports=mongoose.model('Url',urlschema)