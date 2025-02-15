import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./producto-list/producto-list.component').then(m => m.ProductoListComponent) },
  { path: ':id', loadComponent: () => import('./producto-detail/producto-detail.component').then(m => m.ProductoDetailComponent) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule]  
})
export class ProductosRoutingModule { }
