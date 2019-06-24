import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from "@angular/common/http"; 

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ActiveGuard } from './Services/active.guard';
import { StudentdetailsService } from './Services/studentData/studentdetails.service';
import { AddStudentComponent } from './Components/dashboard/add-student/add-student.component';
import { ShowStudentsComponent } from './Components/dashboard/show-students/show-students.component';
import { HomeComponent } from './Components/dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddStudentComponent,
    ShowStudentsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ActiveGuard, StudentdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
