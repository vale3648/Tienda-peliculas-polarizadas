import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', loadComponent: () => import('./landing/landing/landing.component').then(m => m.LandingComponent) },
  { path: 'productos', loadChildren: () => import('./productos/productos-routing.module').then(m => m.ProductosRoutingModule) },
  { path: 'carrito', loadComponent: () => import('./carrito/carrito/carrito.component').then(m => m.CarritoComponent) },
  { path: 'cotizacion', loadComponent: () => import('./cotizacion/cotizacion/cotizacion.component').then(m => m.CotizacionComponent) },
  { path: '**', redirectTo: '/landing' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }