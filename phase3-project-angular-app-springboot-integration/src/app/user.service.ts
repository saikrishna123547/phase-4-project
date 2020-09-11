import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string;
  private id:number;
   
    constructor(private http:HttpClient) { 
      this.url="http://localhost:8083/User";
      
    }
    public addUser(user:User):Observable<User>{
      return this.http.post<User>(this.url , user);
    }

    public deleteUser(id):Observable<User>{
      return this.http.delete<User>(this.url);
    }

    public updateUser(user:User):Observable<User>{
      return this.http.put<User>(this.url , user);
    }

    public getAllUsers():Observable<User[]>{
      return this.http.get<User[]>( this.url+"s");
    }



}
