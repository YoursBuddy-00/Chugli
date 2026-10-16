import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  res.send(`Server is Running`)
})

app.listen(PORT,()=>{
  console.log(`Server is Running on PORT ${PORT}`)
})