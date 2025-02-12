import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-producto-list',
  imports: [CommonModule],
  templateUrl: './producto-list.component.html',
})
export class ProductoListComponent implements OnInit {
  productos: any[] = [];

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    alert(`${producto.nombre} agregado al carrito`);
  }
}