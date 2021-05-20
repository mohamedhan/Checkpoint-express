const express=require("express")
const Datee = require("./middleware/Date")
const app=express()
let b=app.use(Datee)
let a=app.use(express.static(__dirname+"/public"))
app.get("/",[b,a],Datee)


app.listen(5000,err=>{
    err?console.log(err) : console.log("running")
})