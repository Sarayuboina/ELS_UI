import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Items } from '../items';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent implements OnInit{
  loggedIn!: boolean;
  id: any;
  
  user: any;
  uname: any;

  constructor(private service:BookServiceService,private snackBar:MatSnackBar,private ms:MainserviceService,private route:ActivatedRoute)
{

}  
  ngOnInit(): void {
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
  }
@Input()
  itemsList : Items[]=[];

  @Input()
  favCheck :boolean=false;

  addToFavouriteList(items:Items)
  { 
    console.log(items.userName);
    // items[0].userName!="aaaa@aa"
    // console.log(items[0].userName);
    
    // items[0]["userName"]=localStorage.getItem("uname");
    // console.log(items[0]["userName"]);
    items.userName=this.uname;
    console.log(items.userName);
    
    this.service.addBook(items).subscribe(
      data=>{
      console.log(data);
      // console.log(items[0]["userName"]);
      
      this.snackBar.open(items.volumeInfo.title+'added to favlist', '', {
        duration : 1000
      });
    },error =>{
      // this.snackBar.open(''+ 'Please, Login to add to favorites ',"", {
      //  duration : 3000
      console.log(error);
      
       
     });
    

  }

  deleteBookFav(book: Items ){
    this.service.deleteFromFavouriteList(book).subscribe((data)=>{
    console.log(data);
    console.log("del");
    
  
    this.snackBar.open(book.book_id+' deleted', '', {
      duration : 2000
    });
    },error =>{
      console.log(error);
      console.log(book);
      
      const message=JSON.stringify(error.error.message);
      this.snackBar.open(message, '', {
       duration : 2000
     });
    });
    for( var i=0;i<this.itemsList.length;i++){
      if(this.itemsList[i].book_id===book.book_id){
        this.itemsList.splice(i,1);
      }
    }
    
  }

}
