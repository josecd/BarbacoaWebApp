import { Component } from '@angular/core';
import { ServicioCargaService, Todo } from './servicios/servicio-carga.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barbacoaWebApp1';
  todos: Todo[];
  constructor(private todoService: ServicioCargaService) {
 
  }
 
  gettodo(){
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }
}
