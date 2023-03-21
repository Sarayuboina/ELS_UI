import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Assignments } from '../assignments';
import { GroupServiceService } from '../group-service.service';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-trainer-assignments',
  templateUrl: './trainer-assignments.component.html',
  styleUrls: ['./trainer-assignments.component.css']
})
export class TrainerAssignmentsComponent implements OnInit {
  loggedIn: any;
  id: any;
  groupId: any;
  msg="";
  assign!:Assignments;
  assigns:any;

  constructor(private ms:MainserviceService,private route:ActivatedRoute,private gs:GroupServiceService){

  }
  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();

    this.id=this.route.snapshot.paramMap.get('userId');
    this.groupId=this.route.snapshot.paramMap.get('groupId');
    this.gs.getAssignments(this.groupId).subscribe(
      data=>{
        
      },
      error=>{
        this.msg="error";
      }
    )
  }

  createAssign(){
    this.assign.groupId=this.groupId;
    this.assign.startDate=new Date();
    this.gs.postAssignment(this.groupId,this.assign).subscribe(
      data=>{

      },
      error=>{

      }

      

      
    )
  }



}
