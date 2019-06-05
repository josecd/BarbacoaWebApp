import { Component, OnInit } from '@angular/core';
import { ServicioCargaService } from 'src/app/servicios/servicio-carga.service';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

// tslint:disable-next-line: variable-name
  constructor(public _servicioProducto: ServicioCargaService) {
  }

  ngOnInit() {
    // this.servicioProducto.getMenu().subscribe(products => {
    //   this.products = products;
    //   console.log(products);
    // });

  }
}
