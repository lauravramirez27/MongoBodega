import 'reflect-metadata';
import {plainToClass, classToPlain} from 'class-transformer';
import {validate} from 'class-validator';
import { DProductos } from "../storage/producto.js"
import { Router } from "express";

const proxyProducto = Router();
const Dto = Router();

proxyProducto.use((req,res,next)=>{
    if(!req.rateLimit) return;
    let {payload}= req.data;
    const { iat,exp, ...newPayload} =payload;
    payload =newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(DProductos, {}, { ignoreDecorators: true })));
    (!Verify) ? res.status(406).send({status:406, message:"No Autorizado"}) : next();
});

Dto.use( async(req,res,next) => {
    try {
        let data = plainToClass(DProductos, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
});

export {
    proxyProducto,
    Dto
};

 