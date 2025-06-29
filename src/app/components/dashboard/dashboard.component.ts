import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  todos: Todo[] = [];
  //KPI
  //KeyPerformanceIndicators
  //Indicateur de performances clés
  //Comme un tableau de voitures: essence, huile, temperature..

  kpis = [
    {
      id: 1,
      title: 'A faire aujourdh\'ui',
      color: '!bg-blue-500',
      value: 0,
      icon: 'event'
    },
    {
      id: 2,
      title: 'Taches en retard',
      color: '!bg-red-500',
      value: 0,
      icon: 'warning'
    },
    {
      id: 3,
      title: 'Urgentes',
      color: '!bg-yellow-500',
      value: 0,
      icon: 'priority_high'
    }
  ];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodo();
  }

  fetchTodo() {
    //Communication asynchrone donc il faut s'inscrire pour avoir le retour
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      //new Date() sans paramètres retourne "today"
      
      //par defaut il va mettre hours = 0 minutes = 0
      let today = new Date(2025,5,10);
      let countUrgent = 0, countToday = 0, countLate = 0;
      //Urgentes: priority = 1 Et due date = Aujourd'hui
      //"==" n'est pas utilisable avec les objets Date
      //pour cela je convertis en string avec la fonction .toDateString()
      //afin de pouvoir utiliser "=="

      // Urgentes: priority = 1 Et due date = Aujourd'hui
      countUrgent = this.todos.filter(item =>
        item.priority == '1' &&
        new Date(item.dueDate).toDateString() == today.toDateString()
      ).length;
      this.kpis[2].value = countUrgent;

      
      for (let item of this.todos) {
        if (new Date(item.dueDate).toDateString() == today.toDateString()){
          countToday++;
        }
      };
      this.kpis[0].value = countToday;

    for(let i = 0; i <this.todos.length; i++){
      if(new Date(this.todos[i].dueDate) < today)
        countLate ++;

    }

    this.kpis[1].value = countLate;

    /*  let countLate = 0;
      for (let item of this.todos) {
        if (new Date(item.dueDate) < today){
          countLate++;
        }
      }

      this.kpis[1].value = countLate;
      */

      // A faire aujourd'hui: due date = Aujourd'hui
      /*const countToday = this.todos.filter(item =>
        new Date(item.dueDate).toDateString() == today.toDateString()
      ).length;
      this.kpis[0].value = countToday;

      // Tache en retard: due date < Aujourd'hui
      const countLate = this.todos.filter(item =>
        new Date(item.dueDate).setHours(0,0,0,0) < today.getTime()
      ).length;
      this.kpis[1].value = countLate;*/
    });
  }
}
