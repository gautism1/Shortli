const express = require('express');
const router = express.Router();
let url = require('../models/url');
router.get('/allurls', async (req,res) =>
{
     
    await  url.find({}).then((data) =>{
          if(data)
           res.send(data);
           else {
               res.send("No url created by you")
           }
      }).catch((err) =>
      {
          console.log("something went wrong",err)
          res.send("something went wrong",err);
      });      
});
module.exports=router;
