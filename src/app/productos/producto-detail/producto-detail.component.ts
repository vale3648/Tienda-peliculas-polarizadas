import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-producto-detail',
  imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule, MatButtonModule],
  templateUrl: './producto-detail.component.html',
  styleUrl: './producto-detail.component.scss'
})
export class ProductoDetailComponent implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); 
  if (!isNaN(id)) {
    //this.producto = this.productoService.getProductoById(id);
    console.log(this.producto);
  } else {
    console.error('ID de producto inválido');
  }
  }
}
