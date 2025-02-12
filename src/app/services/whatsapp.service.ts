import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {
  constructor() { }

  generarEnlaceWhatsApp(numero: string, mensaje: string): string {
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    return url;
  }
}