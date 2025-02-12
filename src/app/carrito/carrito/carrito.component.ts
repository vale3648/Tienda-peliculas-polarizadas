import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carrito = this.carritoService.getCarrito();
    this.total = this.carritoService.calcularTotal();
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.carrito = [];
    this.total = 0;
  }
}