require('dotenv').config()
const express = require("express")


const app = express()

const cnexp5 = {
    "CODE":"SODVWLEFVNSOALFCN WOFNOVNIWEOCNIADSOVNOVWNID"
}

app.get("/cnexp3",(req,res)=>{
    res.json(cnexp5)
})

app.listen(process.env.PORT,()=>{
    console.log("server stared");
})