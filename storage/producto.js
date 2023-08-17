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
 * "id": 1,
  "nombre": "chocoate",
  "descripcion": "Es rico",
  "estado": 1,
  "created_by": 12
 */
export class DProductos {
    constructor(p1, p2, p3, p4, p5) {
        this.id = p1;
        this.nombre = p2;
        this.descripcion = p3;
        this.estado = p4;
        this.created_by = p5;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El id es obligatorio' }; } }),
    __metadata("design:type", Number)
], DProductos.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El nombre es obligatorio y de tipo string' }; } }),
    __metadata("design:type", String)
], DProductos.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    IsDefined({ message: () => { throw { status: 422, message: 'la descripcion es obligatorio y de tipo string' }; } }),
    __metadata("design:type", String)
], DProductos.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsDefined({ message: () => { throw { status: 422, message: 'el estado es obligatorio y de tipo string' }; } }),
    __metadata("design:type", Number)
], DProductos.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El created_by es obligatorio' }; } }),
    __metadata("design:type", Number)
], DProductos.prototype, "created_by", void 0);
