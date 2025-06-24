import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-todo-detail',
  standalone: false,
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit {
  listPriority = [
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
  ]
  todo!: Todo;
  formGroup!: FormGroup;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackbar: MatSnackBar) {

  }
  ngOnInit(): void {
    //je recupere le Id de mon URL et je le converti au nombre
    //pour faire appel au fetch by ID du service CRUD
    const id = Number(this.route.snapshot.paramMap.get('id'));

    //appel au service pour recuperer le todo
    this.todoService.getTodo(id).subscribe(data => {
      this.todo = data;

      this.formGroup = this.fb.group(
        {
          id: [this.todo.id],
          title: [this.todo.title, Validators.required],
          completed: [this.todo.completed],
          priority: [this.todo.priority],
          dueDate: [this.todo.dueDate],
          description: [this.todo.description]
        }
      )
    })

    //initaliser le formulaire avec les valeurs du todo
    //this.formGroup = this.fb...
  }

  onSave() {
    //test if the form is valid
    if (this.formGroup.valid) {
      this.todoService.updateTodo(this.formGroup.value).subscribe(data => {
        //show popup message
        this.snackbar.open('Updated!', '', { duration: 1000 });
        //return to the initial list after saving
        this.router.navigate(['/']);
      });
    }

    //faire appel au update du service CRUD

  }
  onCancel() {
    this.router.navigate(['/']);
  }

}
