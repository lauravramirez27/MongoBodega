var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
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
    constructor(p1, p2, p3, p4) {
        this.id = p1;
        this.nombre = p2;
        this.id_responsable = p3;
        this.estado = p4;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El id es obligatorio' }; } }),
    __metadata("design:type", Number)
], DBodega.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El nombre es obligatorio y de tipo string' }; } }),
    __metadata("design:type", String)
], DBodega.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'id_responsable' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El id de responsable es obligatorio y de tipo numerico' }; } }),
    __metadata("design:type", Number)
], DBodega.prototype, "id_responsable", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El estado es obligatorio y de tipo numerico' }; } }),
    __metadata("design:type", Number)
], DBodega.prototype, "estado", void 0);
