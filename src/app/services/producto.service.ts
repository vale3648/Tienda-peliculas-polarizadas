import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ RouterModule ],
})

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos = [
    { id: 1, nombre: 'Película Polarizada Standard', precio: 500, imagen: 'https://www.adh.com.co/cdn/shop/products/WhatsAppImage2022-10-17at4.22.40PM.jpg?v=1666124991', description: 'Descripción del producto 1',},
    { id: 2, nombre: 'Película Polarizada Premium', precio: 800, imagen: 'https://www.adh.com.co/cdn/shop/products/WhatsAppImage2022-10-17at4.22.40PM.jpg?v=1666124991', description: 'Descripción del producto 2', },
    { id: 3, nombre: 'Película Polarizada Ultra', precio: 1200, imagen: 'https://www.adh.com.co/cdn/shop/products/WhatsAppImage2022-10-17at4.22.40PM.jpg?v=1666124991', description: 'Descripción del producto 3', }
  ];

  constructor() { }

  getProductos() {
    return this.productos;
  }

  getProductoById(id: number) {
    return this.productos.find(producto => producto.id === id);
  }
}