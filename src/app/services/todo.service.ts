import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

//commande pour creer le fichier:
//ng g service todo

//Le service fait le lien entre le front et le back

//Il fait les operations CRUD: Create, Read, Update, Delete
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiURL = 'api/todos';

  //HttpClient pour communiquer avec le API/Backend
  constructor(private http: HttpClient) { }

  //Create (post)
  addTodo(item: Todo){
    // <Todo>: type de retour de l'appel HTTP
    return this.http.post<Todo>(this.apiURL,  item);
  }

  //R
  //Fetch all items
  getTodos(){
    //HTTP GET without the second parameter because there's no body
    return this.http.get<Todo[]>(this.apiURL);
  }

  //R
  //Fetch one item using its id
  getTodo(id : number) {
    return this.http.get<Todo>(this.apiURL + '/' + id);
  }
  //U
  updateTodo(item : Todo){
    return this.http.put<Todo>(this.apiURL + '/' + item.id, item);
  }
  //D
  deleteTodo(item: number){
    return this.http.delete(this.apiURL + '/' + item);
  }

  
}
