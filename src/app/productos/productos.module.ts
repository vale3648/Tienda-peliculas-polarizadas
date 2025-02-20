import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule, ProductosRoutingModule, ProductoListComponent, ProductoDetailComponent  
  ]
})
export class ProductosModule { }
