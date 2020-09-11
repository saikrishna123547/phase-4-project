import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


   private url:string;
   
    constructor(private http:HttpClient) { 
      this.url="http://localhost:8083/Category";
      
    }
    public addCategory(category:Category):Observable<Category>{
      return this.http.post<Category>(this.url , category);
    }

    public deleteCategory(number):Observable<Category>{
      return this.http.delete<Category>(this.url);
    }

    public updateCategory(category:Category):Observable<Category>{
      return this.http.put<Category>(this.url , category);
    }

    public getALLCategories():Observable<Category[]>{
      return this.http.get<Category[]>( "http://localhost:8083/Categories");
    }



}
