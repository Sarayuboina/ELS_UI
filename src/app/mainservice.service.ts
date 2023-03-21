import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from './login';
import { RegUser } from './reg-user';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  getUsers(val: string):Observable<any> {
   let url=this.baseUrl+'search/'+val;
   return this.http.get(url);
  }
  editDetails(user: any,id:number) :Observable<any>{
   let url=this.baseUrl+'editName/'+id;
   return this.http.put(url,user);
  }
  editInterest(selectedItems: Array<number>, id: any):Observable<any> {
    let url=this.baseUrl+'editInterest/'+id;
    return this.http.put(url,selectedItems);
  }
  updateMode(id: any, val: any) :Observable<any>{
   let url=this.baseUrl+'editMode/'+id;
   return this.http.patch(url,val);
  }
  checkMode(id: number):Observable<any>{
    let url=this.baseUrl+'checkMode/'+id;
    return this.http.get(url);
  }
  saveMode(id:number,mode: number) {
    let url=this.baseUrl+'createMode/'+id;
    return this.http.post(url,mode);
    
  }
  getInterestData(id:number):Observable<any> {
    let url=this.baseUrl+'getInterests/'+id;
    return this.http.get(url);
  }
  getUser(id: number) {
    let url=this.baseUrl+'userData/'+id;
    return this.http.get(url);
  }
  saveInterest(selectedItems: Array<number>, id: number) :Observable<any>{
    let url=this.baseUrl+'saveInterest/'+id;
    return this.http.post(url,selectedItems);
  }
  
  public editPassword(npwd:string,userId:number):Observable<any>{
    let url=this.baseUrl+'changePassword/'+userId;
    return this.http.patch(url,npwd);
  }
  

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  private baseUrl='http://localhost:8098/elearning/api/main/';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  login(log:Login):Observable<any>{
    let url=this.baseUrl+'login';
    return this.http.post(url,log);


  }
  public loginUserFromRemote(log:Login):Observable<any>{
    localStorage.setItem("username",log.userName);
    let url=this.baseUrl+'login';
    return this.http.post(url,log);



  }

  public getUserData(userName: string) :Observable<any> {
    let url=this.baseUrl+'user/'+userName;
    return this.http.get(url);

  }

  public getInterest(userId: number) :Observable<any> {
    let url=this.baseUrl+'interest/'+userId;
    return this.http.get(url);

  }
  logUser(token : any){
    localStorage.setItem("token",token);
    return true;
  }
  public registerUserFromRemote(reg:RegUser):Observable<any>{
    let url=this.baseUrl+'signup';
    return this.http.post(url,reg);
  }

  getToken(){
    return localStorage.getItem("token")
  }
  
  isLoggedIn(){
    let token = localStorage.getItem("token");
  if(token==undefined || token === '' || token == null){
    return false;
  }
  else{
    return true;
  }
  }

}
