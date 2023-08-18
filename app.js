import dotenv from "dotenv";
import express from "express";
import appBodega from "./routers/bodegas.js";
import appProducto from "./routers/producto.js";
import {appInventario} from "./routers/inventarios.js";
import { appToken,appVerify } from "./middlware/token.js";


dotenv.config();
let app = express();

app.use(express.json());
app.use("/Bodega",appVerify,appBodega);
app.use("/Productos",appVerify,appProducto);
app.use("/Inventario",appVerify,appInventario);
app.use("/token",appToken);

let config = JSON.parse(process.env.MY_SERVER)

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});