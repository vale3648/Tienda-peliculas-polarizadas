import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoListComponent } from './producto-list.component';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';

describe('ProductoListComponent', () => {
  let component: ProductoListComponent;
  let fixture: ComponentFixture<ProductoListComponent>;
  let productoService: jasmine.SpyObj<ProductoService>;
  let carritoService: jasmine.SpyObj<CarritoService>;

  beforeEach(async () => {
    const productoServiceSpy = jasmine.createSpyObj('ProductoService', ['getProductos']);
    const carritoServiceSpy = jasmine.createSpyObj('CarritoService', ['agregarProducto']);

    await TestBed.configureTestingModule({
      imports: [ProductoListComponent, CommonModule],
      providers: [
        { provide: ProductoService, useValue: productoServiceSpy },
        { provide: CarritoService, useValue: carritoServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoListComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService) as jasmine.SpyObj<ProductoService>;
    carritoService = TestBed.inject(CarritoService) as jasmine.SpyObj<CarritoService>;

    productoService.getProductos.and.returnValue([
      { id: 1, nombre: 'Película Polarizada', precio: 500, imagen: "" }
    ]);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar la lista de productos', () => {
    fixture.detectChanges();
    const elementos = fixture.nativeElement.querySelectorAll('.producto');
    expect(elementos.length).toBe(1);
  });

  it('debería agregar un producto al carrito', () => {
    const producto = { id: 1, nombre: 'Película Polarizada', precio: 500, imagen: "" };
    component.agregarAlCarrito(producto);
    expect(carritoService.agregarProducto).toHaveBeenCalledWith(producto);
  });
});