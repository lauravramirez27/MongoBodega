import dotenv from "dotenv";
import express from "express";


dotenv.config();
let app = express();

app.use(express.json());

let config = JSON.parse(process.env.MY_SERVER)

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});