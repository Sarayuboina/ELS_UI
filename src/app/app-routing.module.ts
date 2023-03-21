import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminGradesComponent } from './admin-grades/admin-grades.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { AuthServiceService } from './auth-service.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { RegisterComponent } from './register/register.component';
import { SearchProfComponent } from './search-prof/search-prof.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { StudentClassComponent } from './student-class/student-class.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { StudentGroupsComponent } from './student-groups/student-groups.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TrainerClassComponent } from './trainer-class/trainer-class.component';
import { TrainerGroupsComponent } from './trainer-groups/trainer-groups.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
    },
    {
      path:'login',
      component:LoginRegisterComponent,
      pathMatch:'full'
    },
    {
      path:'register',
      component:RegisterComponent,
      pathMatch:'full'
    },

    {
      path:'admin/:userId',
      component:AdminHomeComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'adminGrad/:userId',
      component:AdminGradesComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'trainer/:userId',
      component:TrainerHomeComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'student/:userId',
      component:StudentHomeComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'reset/:userId',
      component:ChangePasswordComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'adminSub/:userId',
      component:AdminSubjectsComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'trainerGroup/:userId',
      component:TrainerGroupsComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'trainerClass/:userId/:groupId',
      component:TrainerClassComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'studClass/:userId/:groupId',
      component:StudentClassComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'studGroups/:userId',
      component:StudentGroupsComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'studFeed/:userId',
      component:StudentFeedbackComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'userProfile/:userId',
      component:ProfileComponentComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'search/:userId/:val',
      component:SearchUserComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'searchProf/:userId/:searchId',
      component:SearchProfComponent,canActivate:[AuthServiceService]
      
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
