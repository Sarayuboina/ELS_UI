import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }

  getBooks(book:string):Observable<any>{
    return this.http.get("http://localhost:8790/books/api/"+book);
  }
  addBook(book:Items){

    return this.http.post("http://localhost:8790/books/api/",book);
  }
  getFavouriteBooks(uname:string):Observable<Items[]>{
    return this.http.get<Items[]>("http://localhost:8790/books/api/user/"+uname);
  }
  deleteFromFavouriteList(items:Items):Observable<any>{
    return this.http.delete("http://localhost:8790/books/api/"+items.book_id)
  }
}
