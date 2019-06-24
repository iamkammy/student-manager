import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ActiveGuard } from './Services/active.guard';
import { RedirectGuard } from './Services/redirect.guard';
import { AddStudentComponent } from './Components/dashboard/add-student/add-student.component';
import { HomeComponent } from './Components/dashboard/home/home.component';
import { ShowStudentsComponent } from './Components/dashboard/show-students/show-students.component';

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch:'full'},
  { path: 'login',canActivate:[RedirectGuard] ,component: LoginComponent},
  { 
    path: 'dashboard',
    canActivate:[ActiveGuard], 
    component: DashboardComponent,
    children: [
      { 
        path:'', redirectTo: 'home', pathMatch: 'full'
      },
      { 
        path: 'home', component: HomeComponent
      },
      {
        path:'add-student',
        component: AddStudentComponent
      },
      {
        path: 'show-student', component:ShowStudentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
