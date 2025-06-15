import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignUpComponent implements OnInit{
  listGender = [
    { text:'Femme', value:'f'},
    { text:'Homme', value:'h'}
  ];
  signupForm! : FormGroup;
  constructor(private formBuilder : FormBuilder){
    
  }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })
  }
  onSubmit(){
    if (this.signupForm.valid){
      console.log(this.signupForm.value);
    }
  }
}
