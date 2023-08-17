import {  Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';

// "id": 195,
//   "id_bodega": 1,
//   "id_producto": 13,
//   "cantidad": 1,
//   "created_by": 166


export class Dinventario{
    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La id es obligatoria`}}})
    id: number;

    @Expose({ name: 'id_bodega' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `el id de bodega es obligatoria`}}})
    id_bodega: number;

    @Expose({ name: 'id_producto' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `el id de producto es obligatoria`}}})
    id_producto: number;

    @Expose({ name: 'cantidad' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La  cantidad es obligatoria`}}})
    cantidad: number;

    constructor(p1:number,p2:number,p3:number,p4:number,) {
        this.id= p1;
            this.id_bodega=p2;
            this.id_producto=p3;
            this.cantidad=p4;
            
    }
 }
