import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapse = false;   // guardamos el valor
  valor :string;
  foo: boolean;
  nombre = "main-menu font-mountainsre";
  nombre2 = "main-menu font-mountainsre visible-menu";


  constructor() {}

  ngOnInit() {  }

  toggleState() { // manejador del evento
    let foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }
}

