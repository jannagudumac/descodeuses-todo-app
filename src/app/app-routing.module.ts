import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignUpComponent } from './components/signup/signup.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

/*path: link introduced to the nav bar
  component: component linked to this path*/
const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  
  {
    path: 'todo-list', component: TodoListComponent
  },
  {
    path: 'userpage', component: UserpageComponent
  },
  {
    path: 'todo-detail/:id', component: TodoDetailComponent
  },
  {
    path: 'todo-table', component: TodoTableComponent
  },
  { //path to the index (main page), by default
    path: '', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
