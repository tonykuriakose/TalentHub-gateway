const express = require("express");
const env = require("dotenv").config();

const app = express();




const PORT=process.env.PORT | 8080;
app.listen(PORT,()=>{
    console.log(`Gateway running at ${PORT}`);
    
})