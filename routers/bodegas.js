import {con} from "../db/atlas.js";
import {limitGrt} from "../limit/config.js"
import { Router } from "express";

const appBodega = Router();
let db = await con();
let Bodega = db.collection("bodegas");


appBodega.get("/",limitGrt(),async(req,res)=>{
    if(!req.rateLimit) return;
    let resul = await Bodega.find().sort({nombre:"1"}).toArray();
    res.send(resul);
    
});

appBodega.post("/",limitGrt(),async(req,res)=>{
   
    try {
        let data = req.body;
        let insert = await Bodega.insertOne(data)
   
    if (insert.insertedId !== undefined ) {
        res.send({status:200, message: "Se ha ingresado correctamente la data"});
    }else{
        res.status(400).send({msg: "Error al insertar la data"})
    
    }
    
    
    } catch (error) {
        res.status(400).send({ error: error });
    }
    
    
})

export default appBodega;      
