import express from 'express';
import consoleLog from "./utils/consoleLog.js";
import {personRouter} from "./routes/person.router.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import {handleErrors} from "./utils/handleErrors.js";

/*
Initialize application
 */
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json())
app.use(handleErrors)
dotenv.config();


app.use('/api', personRouter);


mongoose.connection.once('open', ()=>{
 consoleLog('MongoDB Connection Ready!')
});

mongoose.connection.on('error', (err)=>{
 consoleLog(err)
});

async function startServer(){
 await mongoose.connect(process.env.MONGO_URL);

 app.listen(PORT, ()=>{
  consoleLog(`App started on ${PORT}`);
 });
}

await startServer();