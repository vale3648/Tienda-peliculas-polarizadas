import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];

  constructor() { }

  agregarProducto(producto: any) {
    this.carrito.push(producto);
  }

  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(producto => producto.id !== id);
  }

  getCarrito() {
    return this.carrito;
  }

  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

  vaciarCarrito() {
    this.carrito = [];
  }
}