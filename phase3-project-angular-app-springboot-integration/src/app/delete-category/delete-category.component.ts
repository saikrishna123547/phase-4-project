import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  private category:Category;
  constructor(private categoryService:CategoryService,private router:Router) {
   this.category=new Category(); 
   }
   public deleteCategory():void{
     
    this.categoryService.deleteCategory(this.category.id).subscribe();
             this.category=new Category();
      this.router.navigate(['/categoryList']);
     }
 
   
 
  ngOnInit() {
  }

}