import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Items } from '../items';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-book-favourite',
  templateUrl: './book-favourite.component.html',
  styleUrls: ['./book-favourite.component.css']
})
export class BookFavouriteComponent implements OnInit {

  itemsList:Items[]=[];
  favCheck:boolean=true;
  uname: any;
  
  user: any;
  loggedIn!: boolean;
  id: any;
  

  constructor(private service: BookServiceService, private snackBar : MatSnackBar,private ms:MainserviceService,private route:ActivatedRoute) {
    // this.items=[]
    
 
   }

  ngOnInit() {
   
    this.loggedIn = this.ms.isLoggedIn();
    this.id=this.route.snapshot.paramMap.get('userId');
    this.ms.getUser(this.id).subscribe(
      data=>{
        this.user=data;
        this.uname=this.user.userName;
      },
      error=>{

      }
    )
    this.service.getFavouriteBooks(this.uname).subscribe((data)=>{
      
      console.log(data);
      
      this.itemsList=data
    },
    error =>{
     this.snackBar.open(error['error'], '', {
      duration : 1000
    });
   });

  }

  

}
