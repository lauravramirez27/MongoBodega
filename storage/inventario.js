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
// "id": 195,
//   "id_bodega": 1,
//   "id_producto": 13,
//   "cantidad": 1,
//   "created_by": 166
export class Inventario {
    constructor(p1, p2, p3, p4) {
        this.id = p1;
        this.id_bodega = p2;
        this.id_producto = p3;
        this.cantidad = p4;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 422, message: `La id es obligatoria` }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "id", void 0);
__decorate([
    Expose({ name: 'id_bodega' }),
    IsDefined({ message: () => { throw { status: 422, message: `el id de bodega es obligatoria` }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: 'id_producto' }),
    IsDefined({ message: () => { throw { status: 422, message: `el id de producto es obligatoria` }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: 'cantidad' }),
    IsDefined({ message: () => { throw { status: 422, message: `La  cantidad es obligatoria` }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "cantidad", void 0);
