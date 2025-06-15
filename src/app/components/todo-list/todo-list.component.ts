import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'] // 
})
export class TodoListComponent implements OnInit {
  formGroup!: FormGroup;
  todos: Todo[] = [];

  constructor(private fb: FormBuilder, private todoService: TodoService, private snackBar : MatSnackBar) {
    // Create the form with a single required 'title' field
    this.formGroup = this.fb.group({
      title: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Asynchronous data fetching; we need to subscribe to get the result
    this.fetchTodo();
  }

  // Fetch the list of todos from the service
  fetchTodo() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    }); 
  }

  // Add a new todo item if the form is valid
  onAddTodo() {
    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;

      const todo: Todo = {
        id: null,
        title: formValue.title,
        completed: false,
        priority: null,
        dueDate: '',
        description: null
      };

      this.todoService.addTodo(todo).subscribe(() => {
        this.fetchTodo(); // Refresh the list after adding
      });
    }
  }
  onDeleteTodo(id : number | null): void{
    if (id == null){
      return
    }
    this.todoService.deleteTodo(id).subscribe(() => {
      this.fetchTodo();
      this.snackBar.open('Deleted !','', {duration: 1000}); //to make the bar disappear
    })
  }

  onCheckChange(event : MatCheckboxChange, todo : Todo) {
    console.log(event.checked);
    todo.completed = event.checked;
    
    //mettre à jour dans l'api
    this.todoService.updateTodo(todo).subscribe((data => {
      console.log(data);
      this.snackBar.open('Updated!', '', {duration: 1000});
    }));

  }
}


