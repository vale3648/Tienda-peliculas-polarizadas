import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  standalone: true, 
  selector: 'app-producto-list',
  styleUrls: ['./producto-list.component.css'],
  imports: [CommonModule,RouterModule, MatCardModule, MatGridListModule, MatButtonModule],
  providers: [ProductoService, CarritoService], 
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
    console.log('Productos cargados:', this.productos);
  }

  agregarProducto(product: any) {
    console.log('Producto agregado al carrito:', product);
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    alert(`${producto.nombre} agregado al carrito`);
  }
}
