// require("dotenv").config()
import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server listening at port : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongo db connection failed !",error)
})












































// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js"
// import express from "express";
// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("Error : ",error);
//             throw error
//         });
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listining on port : ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("Error : ", error);
//         throw error
//     }
// })()