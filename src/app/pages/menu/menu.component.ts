import { Component, OnInit } from '@angular/core';
import { ServicioCargaService } from 'src/app/servicios/servicio-carga.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

// tslint:disable-next-line: variable-name
  constructor(public _servicioProducto: ServicioCargaService) { }

  ngOnInit() {
  }

}
