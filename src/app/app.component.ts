import { Component } from '@angular/core';
import { ServicioCargaService } from './servicios/servicio-carga.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barbacoaWebApp1';

  constructor(private todoService: ServicioCargaService) {
 
  }
 
 
  }

