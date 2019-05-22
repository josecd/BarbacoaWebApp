import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Todo {
  id?: string,
  nombre:string,
}

@Injectable({
  providedIn: 'root'
})

export class ServicioCargaService {
  private todosCollection: AngularFirestoreCollection<Todo>;
  private to :AngularFirestoreCollection<Todo>;

  private todos: Observable<Todo[]>

  constructor (private db: AngularFirestore) {


 
    }


  
   addCom(id){
     return this.todosCollection.doc('id').collection('comentarios').valueChanges();
   }
    getTodos() {
      return this.todos;
    }
    getTodo(id) {
      return this.todosCollection.doc<Todo>(id).valueChanges();
    }
    getCom(id){
      return this.todosCollection.doc<Todo>(id).collection('comentarios').doc(id).valueChanges();
    }
   
    updateTodo(todo: Todo, id: string) {
      return this.todosCollection.doc(id).update(todo);
    }
   
    addTodo(todo: Todo) {
      return this.todosCollection.add(todo);
    }
   
    removeTodo(id) {
      return this.todosCollection.doc(id).delete();
    }
  }
