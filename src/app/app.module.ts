import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, MaxLengthValidator, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TrainerDashComponent } from './trainer-dash/trainer-dash.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { MatListOptionModule, MatSelectionListModule} from '@angular/material/list';

import {MatSelectModule} from '@angular/material/select';


import { AdminGradesComponent } from './admin-grades/admin-grades.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { TrainerGroupsComponent } from './trainer-groups/trainer-groups.component';
import { TrainerClassComponent } from './trainer-class/trainer-class.component';
import { StudentClassComponent } from './student-class/student-class.component';
import { StudentGroupsComponent } from './student-groups/student-groups.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PeopleComponentComponent } from './people-component/people-component.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashComponent,
    AdminHomeComponent,
    TrainerDashComponent,
    TrainerHomeComponent,
    StudentDashComponent,
    StudentHomeComponent,
    ChangePasswordComponent,
    LoginRegisterComponent,
    AdminGradesComponent,
    AdminSubjectsComponent,
    TrainerGroupsComponent,
    TrainerClassComponent,
    StudentClassComponent,
    StudentGroupsComponent,
    UserProfileComponent,
    PeopleComponentComponent,
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    
    MatCheckboxModule,
    
    MatSelectModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
