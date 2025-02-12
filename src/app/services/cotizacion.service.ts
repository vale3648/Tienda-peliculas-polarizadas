import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  constructor() { }

  enviarCotizacion(datos: any) {
    console.log('Cotización enviada:', datos);
    // Aquí se puede hacer una petición HTTP a un backend
  }
}