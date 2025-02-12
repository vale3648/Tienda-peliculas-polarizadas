import { Component } from '@angular/core';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
})
export class CotizacionComponent {
  mensaje: string = 'Hola, me interesa solicitar una cotización.';

  constructor(private whatsappService: WhatsAppService) { }

  getEnlaceWhatsApp() {
    const numero = '3115559928';
    return this.whatsappService.generarEnlaceWhatsApp(numero, this.mensaje);
  }
}