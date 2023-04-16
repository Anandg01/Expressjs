const express=require('express');
const router=express.Router();
const contactcontroller=require('../controller/contactus')

router.get('/contactus',contactcontroller.contact)
router.post('/success',(req, res)=>{
    res.send(`<h1>Succesfull fill the form </h1>`)
})
module.exports=router;