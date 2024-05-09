import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";
import router from './routes/router.js';

const app = express()

app.use(cors())
app.use(express.json());
app.use('/', router)

dotenv.config()

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err.message));

app.use('/uploads', express.static('uploads'));
app.listen(process.env.PORT, () =>{
    console.log("listening");
})
