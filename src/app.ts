import {syncDatabase} from  './utility/pgconnect'
import bodyParser from"body-parser";
import taskRoutes from './routes/taskroute'
import express,{Application, Request, Response, NextFunction} from "express";
const app:Application= express()
  
syncDatabase()
   
app.use(express.json());

app.use('/api', taskRoutes)

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" })); 
const PORT:number=5000
app.listen(PORT,()=>{
    console.log( `app is running on http://localhost:${PORT}`) 
}) 