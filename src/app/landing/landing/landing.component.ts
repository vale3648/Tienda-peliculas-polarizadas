import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoListComponent } from '../../productos/producto-list/producto-list.component';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, ProductoListComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
