import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Grade } from '../grade';
import { Group } from '../group';
import { MainserviceService } from '../mainservice.service';
import { StudentServiceService } from '../student-service.service';
import { TrainerServiceService } from '../trainer-service.service';

@Component({
  selector: 'app-trainer-class',
  templateUrl: './trainer-class.component.html',
  styleUrls: ['./trainer-class.component.css']
})
export class TrainerClassComponent implements OnInit{
  public loggedIn =false;
  public groupId:any;
  public id:any;
  public class=new Group;
  public sub:any;
  public grade=new Grade();
  public grades:any;
  public subjects:any;
  public students:any;
  public rating=0;
  public stars: boolean[] = Array(5).fill(false);
  constructor(private route:ActivatedRoute,private ms:MainserviceService,private as:AdminServiceService,private ts:TrainerServiceService,private ss:StudentServiceService,private router:Router){  

  }
  
  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();

    this.id=this.route.snapshot.paramMap.get('userId');
    this.groupId=this.route.snapshot.paramMap.get('groupId');
    
    this.ts.getClassData(this.groupId).subscribe(
      data=>{
          this.class=data;
          this.as.getGrade(this.class.groupGrad).subscribe(
            data=>{
                 this.grade=data;
                 for(let i=0;i<this.class.rating;i++){
                   this.stars[0]=true;
                 }
                 console.log(data);
            },
            error=>{
              console.log(error);
            }
          )

          this.as.getSub(this.class.groupSub).subscribe(
            data=>{
              this.sub=data;
              console.log(data);
            },
            error=>{
              console.log(error)
      
            }
          )

          this.ss.getGroupRating(this.groupId).subscribe(
            data=>{
              var s=0;
              this.students=data;
             for(let i=0;i<this.students.length;i++){
              s=s+this.students[i].rating;
             }
             this.rating=s/this.students.length;
             for(let j=0;j<this.rating;j++){
              this.stars[j]=true;
             }
             
            },
            error=>{
      
            }
          )
          
      },
      error=>{
        console.log(error);
      }
    )
    
    console.log(this.class);
    
    
    
    
     

    
      
   
  }


  getInfo(){
    this.as.getSubData().subscribe(
      data=>{
        
         this.subjects=Object.keys(data).map(e=>data[e]);
      },
      error=>{
        console.log(error);
      }
    )
    this.as.getGradData().subscribe(
      data=>{
        this.grades=data;
      },
      error=>{
        console.log(error);
      }
    )
    
  }

  editGroup(groupId:number){
    this.ts.editGroup(this.class,this.groupId).subscribe(
      data=>{
           this.ngOnInit();
      },
      error=>{

      }

    )
  }

  deleteGroup(groupId:number){

    this.ts.deleteGroup(groupId).subscribe(
      data=>{
        this.router.navigate(['/trainerGroup',this.id]);

      },
      error=>{

      }
    )

  }

}
