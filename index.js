const express= require("express");
const app = express();
const mongoose =require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const useroute=require("./routes/user")




mongoose
.connect(
process.env.MONGO_URL
)


app.use(express.json());
app.use("/api/user",useroute);


app.listen(process.env.PORT||5000 ,()=>{
console.log("running");
});

