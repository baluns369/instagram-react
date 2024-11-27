 import express from "express";
 import env from "dotenv";
 import router from "./router.js";
 import Connection from "./Connection.js";

 env.config()
 const app=express()
 app.use(express.json())
 
 app.use(express.static("frond-end"))
 app.use('/api',router)
 
 Connection().then(()=>{
    console.log("Database Connected");
    app.listen(process.env.PORT,()=>{
        console.log(`server running at http://localhost:${process.env.PORT}`);
    })
})