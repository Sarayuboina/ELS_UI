import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Items } from '../items';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  itemsList: Items[] = [];
  public uname:any ;
  public user:any;
  loggedIn!: boolean;
  id: any;
  
  
  // items: Array<Items> = [];
  constructor(private service:BookServiceService,private ms:MainserviceService,private route:ActivatedRoute) { 

    
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

    
  }

  onEnter(searchKey:string) {
    this.service.getBooks(searchKey).subscribe(
      data=>{
        
        this.itemsList=data["items"]
        console.log(this.itemsList);
        
      },
      error=>{
        console.log(error);
        
      }
    )
    // this.newsService.searchNews(searchKey).subscribe((data) => {
    //   this.newsList = data['articles'];
    
    // }
    // );
  }

}
