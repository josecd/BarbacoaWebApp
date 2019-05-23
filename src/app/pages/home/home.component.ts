import { Component, OnInit } from '@angular/core';
import { ServicioCargaService } from 'src/app/servicios/servicio-carga.service';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [];
  constructor(private servicioProducto: ServicioCargaService) {
    
  }

  ngOnInit() {
    this.servicioProducto.getMenu().subscribe(products => {
      this.products = products;
    });

  }
} 
