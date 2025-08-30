import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express();

const PORT = process.env.PORT

app.use(express.static("public"));

app.listen(PORT, () =>{
  console.log(`Listening at port ${PORT}`)
})


