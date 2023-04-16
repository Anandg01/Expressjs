const path=require('path');

exports.contact=(req, res)=>{
    res.sendFile(path.join(__dirname,'../','views','contactus.html'))
}