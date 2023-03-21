import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { Group } from '../group';
import { MainserviceService } from '../mainservice.service';
import { TrainerServiceService } from '../trainer-service.service';

@Component({
  selector: 'app-trainer-home',
  templateUrl: './trainer-home.component.html',
  styleUrls: ['./trainer-home.component.css']
})
export class TrainerHomeComponent implements OnInit{
  public loggedIn =false;
  public id:any;
  msg='';
  btn:boolean=true;
  arr =["abcd","qrst","qrstui"];
  public gr=new Group();
  
  subjects : any;
  grades : any;
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private route:ActivatedRoute,private ms:MainserviceService,private fb: FormBuilder,private as:AdminServiceService,private ts:TrainerServiceService,private snackBar:MatSnackBar){
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.maxLength(1)]),
      
    });

    
  }
  
  
  ngOnInit(): void {
    
    this.loggedIn = this.ms.isLoggedIn();
    this.id=this.route.snapshot.paramMap.get('userId');
   
    this.ms.getInterest(this.id).subscribe(

      data=>{
        //  this.msg=data;
        
        this.msg=data.test;
      },
      error=>{
         console.log(error);
      }
      

    )

    
  }
   selectedItems!:any[];
   
  form: FormGroup;
  Data: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' },
  ];
  
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
     checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
         checkArray.removeAt(i);
        
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    if(this.form.value.checkArray.length==3){
     this.selectedItems=this.form.value.checkArray;
     this.ms.saveInterest(this.selectedItems,this.id).subscribe(
      data=>{

      },
      error=>{

      }
     )
    }
    else{
      alert("Enter 3 interests");
    }

    console.log(this.form.value);
  }

  
  // checkSize(){
  //   console.log(this.form.value.checkArray.length );
    
  //   if(this.form.value.checkArray.length == 1){
     
  //     this.btn=false;
  //   }
  //   alert("Only one interest");
  //   this.btn=true;

  // }
  getSub(){
    this.as.getSubData().subscribe(
      data=>{
        
         this.subjects=Object.keys(data).map(e=>data[e]);
      },
      error=>{
        console.log(error);
      }
    )
  }

  createGroup(id:number){
   this.gr.trainerId=id;
   this.ts.insertGroup(this.gr,id).subscribe(
    data=>{
      this.snackBar.open("Created successfully","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
    },
    error=>{
      
    }
   )
    console.log(this.gr)

  }

  getInfo(){
    this.getSub();
    this.as.getGradData().subscribe(
      data=>{
        this.grades=data;
      },
      error=>{
        console.log(error);
      }
    )
    
  }

}
