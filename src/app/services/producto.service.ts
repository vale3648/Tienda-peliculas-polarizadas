import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos = [
    { id: 1, nombre: 'Película Polarizada Standard', precio: 500, imagen: 'assets/images/standard.jpg' },
    { id: 2, nombre: 'Película Polarizada Premium', precio: 800, imagen: 'assets/images/premium.jpg' },
    { id: 3, nombre: 'Película Polarizada Ultra', precio: 1200, imagen: 'assets/images/ultra.jpg' }
  ];

  constructor() { }

  getProductos() {
    return this.productos;
  }

  getProductoById(id: number) {
    return this.productos.find(producto => producto.id === id);
  }
}