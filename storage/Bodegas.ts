import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';
/**
 * {
    "id": 50,
    "nombre": "A Bodega",
    "id_responsable": 11,
    "estado": 1,
    
  }
 */

export class DBodega {
  @Expose({ name: 'id' })
  @IsDefined({ message: () => { throw { status: 422, message: 'El id es obligatorio' } } })
  id: number;

  @Expose({ name: 'nombre' })
  @IsDefined({ message: () => { throw { status: 422, message: 'El nombre es obligatorio y de tipo string' } } })
  nombre: string;

  @Expose({ name: 'id_responsable' })
  @IsDefined({ message: () => { throw { status: 422, message: 'El id de responsable es obligatorio y de tipo numerico' } } })
  id_responsable: number;

  @Expose({ name: 'estado' })
  @IsDefined({ message: () => { throw { status: 422, message: 'El estado es obligatorio y de tipo numerico' } } })
  estado: number;

  constructor(p1: number, p2: string, p3: number, p4: number,) {
    this.id = p1;
    this.nombre = p2;
    this.id_responsable = p3;
    this.estado = p4;

  }

}



