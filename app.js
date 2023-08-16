import dotenv from "dotenv";
import express from "express";
import appBodega from "./routers/bodegas.js";
import appProducto from "./routers/producto.js";


dotenv.config();
let app = express();

app.use(express.json());
app.use("/Bodegas",appBodega);
app.use("/Productos",appProducto);

let config = JSON.parse(process.env.MY_SERVER)

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});