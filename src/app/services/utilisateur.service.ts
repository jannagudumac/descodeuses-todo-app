import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UtilisateurService {
  private apiURL : string = 'api/utilisateurs'
  constructor(private http: HttpClient) { }
 
  getUtilisateurs(){
    return this.http.get<Utilisateur>(this.apiURL);
  }

  }

