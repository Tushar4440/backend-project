// require("dotenv").config()
import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDb()












































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