import { TestBed } from '@angular/core/testing';

import { CarritoService } from './carrito.service';

describe('CarritoService', () => {
  let service: CarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoService);
  });

  it('debería agregar un producto al carrito', () => {
    const producto = { id: 1, nombre: 'Película Polarizada', precio: 500 };
    service.agregarProducto(producto);
    expect(service.getCarrito().length).toBe(1);
  });

  it('debería eliminar un producto del carrito', () => {
    const producto = { id: 1, nombre: 'Película Polarizada', precio: 500 };
    service.agregarProducto(producto);
    service.eliminarProducto(1);
    expect(service.getCarrito().length).toBe(0);
  });

  it('debería calcular el total correctamente', () => {
    const producto1 = { id: 1, nombre: 'Película Polarizada', precio: 500 };
    const producto2 = { id: 2, nombre: 'Película Premium', precio: 800 };
    service.agregarProducto(producto1);
    service.agregarProducto(producto2);
    expect(service.calcularTotal()).toBe(1300);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
