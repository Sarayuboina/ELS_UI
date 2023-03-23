import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-trainer-dash',
  templateUrl: './trainer-dash.component.html',
  styleUrls: ['./trainer-dash.component.css']
})
export class TrainerDashComponent  implements OnInit{

  log=new Login();
  username='';
  user:any;
  val='';
  public loggedIn =false;
  constructor(private ms:MainserviceService,private route:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
   
  }
    

  logoutUser(){
    this.ms.logout();
    location.href="/login";
    // location.href="/login";
  }
  id=this.route.snapshot.paramMap.get('userId');
  
}
