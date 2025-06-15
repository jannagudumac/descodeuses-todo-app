import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../../models/utilisateur.model';

@Component({
  selector: 'app-userpage',
  standalone: false,
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.css'
})
export class UserpageComponent implements OnInit {

  userGroup!: FormGroup;
  users: Utilisateur[] = [];

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

}
