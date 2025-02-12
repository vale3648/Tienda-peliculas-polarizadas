import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Ruta por defecto
  { path: 'landing', loadComponent: () => import('./landing/landing/landing.component').then(m => m.LandingComponent) },
  { path: 'productos', loadComponent: () => import('./productos/producto-list/producto-list.component').then(m => m.ProductoListComponent) },
  { path: 'carrito', loadComponent: () => import('./carrito/carrito/carrito.component').then(m => m.CarritoComponent) },
  { path: 'cotizacion', loadComponent: () => import('./cotizacion/cotizacion/cotizacion.component').then(m => m.CotizacionComponent) },
  { path: '**', redirectTo: '/landing' }
];