import { Component, OnInit } from '@angular/core';
import { ServicioCargaService, Todo } from 'src/app/servicios/servicio-carga.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Todo[];


  constructor(private todoService: ServicioCargaService) {

  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }
}
