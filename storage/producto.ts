import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';

/**
 * "id": 1,
  "nombre": "chocoate",
  "descripcion": "Es rico",
  "estado": 1,
  "created_by": 12
 */

export class DProductos {
    @Expose({ name: 'id' })
    @IsDefined({ message: () => { throw { status: 422, message: 'El id es obligatorio' } } })
    id: number;

    @Expose({ name: 'nombre' })
    @IsDefined({ message: () => { throw { status: 422, message: 'El nombre es obligatorio y de tipo string' } } })
    nombre: string;

    @Expose({ name: 'descripcion' })
    @IsDefined({ message: () => { throw { status: 422, message: 'la descripcion es obligatorio y de tipo string' } } })
    descripcion: string;

    @Expose({ name: 'estado' })
    @IsDefined({ message: () => { throw { status: 422, message: 'el estado es obligatorio y de tipo string' } } })
    estado: number;

    @Expose({ name: 'created_by' })
    @IsDefined({ message: () => { throw { status: 422, message: 'El created_by es obligatorio' } } })
    created_by: number;

    constructor(p1: number, p2: string, p3: string, p4: number, p5: number,) {
        this.id = p1;
        this.nombre = p2;
        this.descripcion = p3;
        this.estado = p4;
        this.created_by = p5;

    }
}