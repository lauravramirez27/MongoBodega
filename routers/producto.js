import {con} from "../db/atlas.js";
import {limitGrt} from "../limit/config.js"
import { Router } from "express";

const appProducto = Router();
let db = await con();
let inventarios = db.collection("inventarios");
let productos = db.collection("productos");

appProducto.get("/",limitGrt(),async(req,res)=>{
    if(!req.rateLimit) return;
    console.log(req.rateLimit);
    let resul = await inventarios.aggregate([
        {
          $group: {
            _id: "$id_producto",
            total: { $sum: "$cantidad" }
          }
        },
        {
          $lookup: {
            from: "productos", // Reemplaza "productos" con el nombre de la colección de productos
            localField: "_id",
            foreignField: "id", // El campo que relaciona productos con inventarios
            as: "producto"
          }
        },
        {
          $unwind: "$producto"
        },
        {
          $sort: { total: -1 }
        },
        {
          $project: {
            _id: 0,
            id_producto: "$_id",
            total: 1,
            nombre_producto: "$producto.nombre" // Reemplaza "nombre" con el campo correcto en la colección de productos
          }
        }
      ]).toArray();
      res.send(resul);
    
});

/* 
    {
        id:1,
        nombre:"chocoate",
        descripcion:"Es rico",
        estado:1
    }
*/

appProducto.post("/",limitGrt(),async (req,res)=>{
    let data = req.body;
    let idR = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    try {
        let insert = await productos.insertOne(data);
        let inserIn = await inventarios.insertOne({
            id:idR,
            id_bodega:1,        
            id_producto:data.id,
            cantidad:1,
            created_by:166
        })
        if (insert.insertedId === undefined || inserIn.insertedId === undefined) {
            res.send({status:400, message: "Error al insertar la data"});
        }else{
            res.send({status:200, message: "La data se inserto correctamente"});
        }
        console.log(insert.insertedId === inserIn.insertedId);
    } catch (error) {
        res.status(400).send({error: error});
    }
});
export default appProducto;   