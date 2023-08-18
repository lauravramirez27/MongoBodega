import 'reflect-metadata';
import {plainToClass, classToPlain } from 'class-transformer';
import { Bodega } from '../storage/Bodegas.js';
import { Productos } from '../storage/producto.js';
import dotenv from 'dotenv';
import {Router} from 'express';
import { SignJWT, jwtVerify } from 'jose';


dotenv.config("../");
const appToken = Router();
const appVerify = Router();

    let DTO = (p1)=>{

        const clase = {
            'Bodega':Bodega,
            'Productos':Productos
        }
        const instancia = clase[p1];
        if(!instancia) throw {status:500, message:"Token solicitado no existente "}
        return instancia;
    }


appToken.use("/:collecion", async(req,res)=>{
    try {
        let cadena = (req.baseUrl).substring(7);
        let clase = DTO(cadena);
        let inst =  plainToClass(clase, {}, { ignoreDecorators: true });
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        req.data = jwt;
        res.status(201).send({status: 201, message: jwt});
    } catch (error) {
        res.status(404).send({status: 404, message: "Token solicitado no valido"});
    }
})

appVerify.use("/", async(req,res,next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.status(400).send({status: 400, token: "Token no enviado"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        res.status(498).send({status: 498, token: "Token caducado"});
    }
})

export {
    appToken,
    appVerify,
    DTO
};