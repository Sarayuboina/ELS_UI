import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  public id:any;
  public loggedIn:any;
  public user:any;
  public Age:any;
  public date:any;
  public size:any;
  constructor(private ms:MainserviceService,private router:Router,private route:ActivatedRoute,private ss:StudentServiceService){

  }
  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
    this.id=this.route.snapshot.paramMap.get('userId');
    this.ms.getUser(this.id).subscribe(
      data=>{
        this.user=data;
        this.date=new Date(this.user.dob);
        let timeDiff = Math.abs(Date.now() - this.date.getTime());
         this.Age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
      },
      error=>{

      }
    )
    this.ss.getGroupData(this.id).subscribe(
      data=>{
        let groups=data;
        this.size=groups.length;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
