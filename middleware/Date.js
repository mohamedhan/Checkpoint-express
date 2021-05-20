var path = require('path');
var parentDir = path.dirname(path.dirname(__filename));
let date=new Date()
const Datee=(req,res,next)=>{
    let h=date.getHours(); //16
    let d=date.getDay() //4
    //  false || false && false || false
    if(!(d>=1&& d<=5 && h>=9&& h <=17)){
       return res.sendFile(parentDir+"/public/notFound.html")
    }
    next()

}
module.exports=Datee