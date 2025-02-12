import { TestBed } from '@angular/core/testing';

import { ProductoService } from './producto.service';

describe('ProductoService', () => {
  let service: ProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('debería devolver la lista de productos', () => {
    const productos = service.getProductos();
    expect(productos.length).toBeGreaterThan(0);
  });

  it('debería devolver un producto por ID', () => {
    const producto = service.getProductoById(1);
    expect(producto).toBeDefined();
    expect(producto?.id).toBe(1);
  });
});
