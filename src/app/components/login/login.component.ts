import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// @ is for decorator
// decorates the class component, goes right before the class
// standalone: false  - is only accessible via module
// standalone: true is to make the component without module
// obligatory declaration in app.module.ts (Module)
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

//implements an interface, can have multiple interfaces
export class LoginComponent implements OnInit /*interface*/ {
  //! to initialise the variable afterwards
  loginForm!: FormGroup;

  //use automatic injection to get an object form builder which will create a form
  //private in front of formBuilder to make the variable accessible outside of the constructor
  //to do that we add what we need in the parametres

  constructor(private formBuilder: FormBuilder, private router: Router) {
    //this.formBuilder = new FormBuilder(); //not needed, Angular does it automatically

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //1st parameter is the initial value of the field - empty
      //2nd parameter (list): Validators
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      console.log(this.loginForm.value.username);
      //this gives undefined because there's not other username
      console.log(this.loginForm.value.username2);

      //AUTHENTICATION
      if (this.loginForm.value.username == 'admin@test.com' && this.loginForm.value.password == 'admin') {
        sessionStorage.setItem('isLoggedIn', 'true');
        this.router.navigateByUrl('');
      }
    }
  }
}


