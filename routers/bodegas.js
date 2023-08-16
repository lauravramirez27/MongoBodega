import {con} from "../db/atlas.js";
import {limitGrt} from "../limit/config.js"
import { Router } from "express";

const appBodega = Router();
let db = await con();
let Bodega = db.collection("bodegas");

appBodega.get("/",limitGrt(),async(req,res)=>{
    if(!req.rateLimit) return;
    console.log(req.rateLimit);
    let resul = await Bodega.find().sort({nombre:"1"}).toArray();
    res.send(resul);
    
});
export default appBodega;      
