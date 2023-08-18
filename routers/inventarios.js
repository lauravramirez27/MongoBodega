import { con } from "../db/atlas.js";
import { limitGrt } from "../limit/config.js"
import { Router } from "express";
import { proxyVerify } from "../middlware/proxyVerify.js";

export const appInventario = Router();
let db = await con();
let Inventario = db.collection("inventarios");


appInventario.post("/", limitGrt(), proxyVerify,async (req, res) => {
    let data = req.body;
    let idR = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    try {
        const exis = await Inventario.findOne({
            id_producto: data.id_producto,
            id_bodega: data.id_bodega
        });
        if (exis) {
            let Update = await Inventario.updateOne(
                {
                    id_producto: { $eq: data.id_producto },
                    id_bodega: { $eq: data.id_bodega }
                }, {
                $set: { cantidad: data.cantidad }
            }
            )
            res.status(200).send({ msg: "Se ha actualizado correctamente la data", data: Update })
        }
        else {
            let insert = await Inventario.insertOne(
                {
                    id: idR,
                    id_bodega: data.id_bodega,
                    id_producto: data.id_producto,
                    cantidad: data.cantidad,
                    created_by: 166

                }
            )
            res.status(200).send({ msg: "Se ha ingresado correctamente la data", data: insert })
        }

    } catch (error) {
        res.status(400).send({ error: error });
    }

})
