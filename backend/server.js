const express = require('express');
const cors=require("cors");
const mongoose = require('mongoose');
import listings from "./api/listing.route.js"
require('dotenv').config();
const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/login",login)
app.use("*",(req,res)=>res.status(404).json({error:"not found"}))

export default app

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true}
// );
// const connection = mongoose.connection;
// connection.once('open', ()=>{
//   console.log("MongoDB database connection established successfully");    
// });


// app.listen(port, () => {
//     console.log('Server is running on port: $');
// });
