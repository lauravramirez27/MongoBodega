import 'reflect-metadata';
import {plainToClass, classToPlain} from 'class-transformer';
import {validate} from 'class-validator';
import { Bodega } from "../storage/Bodegas.js"
import { Router } from "express";
import { DTO } from "./token.js";

const proxyVerify = Router();
const Dto = Router();

proxyVerify.use((req,res,next)=>{
    if(!req.rateLimit) return;
    let {payload}= req.data;
    const { iat,exp, ...newPayload} =payload;
    payload =newPayload;
    let cadena = (req.baseUrl).substring(1);
    let Clone = JSON.stringify(classToPlain(plainToClass(DTO(cadena), {}, { ignoreDecorators: true })));
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({status:406, message:"No Autorizado"}) : next();
});

Dto.use( async(req,res,next) => {
    try {
        let data = plainToClass(Bodega, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
});

export {
    proxyVerify,
    Dto
};

 