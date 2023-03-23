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

import {MatInputModule} from '@angular/material/input';
import { AdminGradesComponent } from './admin-grades/admin-grades.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { TrainerGroupsComponent } from './trainer-groups/trainer-groups.component';
import { TrainerClassComponent } from './trainer-class/trainer-class.component';
import { StudentClassComponent } from './student-class/student-class.component';
import { StudentGroupsComponent } from './student-groups/student-groups.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PeopleComponentComponent } from './people-component/people-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchProfComponent } from './search-prof/search-prof.component';
import { QuestionsAndAnswersComponent } from './questions-and-answers/questions-and-answers.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TrainerAssignmentsComponent } from './trainer-assignments/trainer-assignments.component';
import { StudentAssignmentsComponent } from './student-assignments/student-assignments.component';
import { StudentTodosComponent } from './student-todos/student-todos.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookContainerComponent } from './book-container/book-container.component';
import { BookTemplateComponent } from './book-template/book-template.component';
import { BookFavouriteComponent } from './book-favourite/book-favourite.component';
import {MatCardModule} from '@angular/material/card';
// import { MatListOptionModule, MatSelectionListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';






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
    ProfileComponentComponent,
    SearchUserComponent,
    SearchProfComponent,
    QuestionsAndAnswersComponent,
    StudentFeedbackComponent,
    FileUploadComponent,
    TrainerAssignmentsComponent,
    StudentAssignmentsComponent,
    StudentTodosComponent,
    BookSearchComponent,
    BookContainerComponent,
    BookTemplateComponent,
    BookFavouriteComponent,
    
   
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
    
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
