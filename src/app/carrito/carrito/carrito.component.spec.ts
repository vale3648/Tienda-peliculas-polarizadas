import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoComponent } from './carrito.component';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';

describe('CarritoComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;
  let carritoService: jasmine.SpyObj<CarritoService>;

  beforeEach(async () => {
    const carritoServiceSpy = jasmine.createSpyObj('CarritoService', ['getCarrito', 'calcularTotal']);

    await TestBed.configureTestingModule({
      imports: [CarritoComponent, CommonModule],
      providers: [
        { provide: CarritoService, useValue: carritoServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoComponent);
    component = fixture.componentInstance;
    carritoService = TestBed.inject(CarritoService) as jasmine.SpyObj<CarritoService>;

    carritoService.getCarrito.and.returnValue([
      { id: 1, nombre: 'Película Polarizada', precio: 500 }
    ]);
    carritoService.calcularTotal.and.returnValue(500);
  });

  it('debería mostrar los productos en el carrito', () => {
    fixture.detectChanges();
    const elementos = fixture.nativeElement.querySelectorAll('.producto');
    expect(elementos.length).toBe(1);
  });

  it('debería mostrar el total correctamente', () => {
    fixture.detectChanges();
    const total = fixture.nativeElement.querySelector('.total');
    expect(total.textContent).toContain('500');
  });
});