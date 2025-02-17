import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './producto-detail.component.html',
  styleUrl: './producto-detail.component.scss'
})
export class ProductoDetailComponent implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private productoService: ProductoService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productoService.getProductoById(id);
  }
}
