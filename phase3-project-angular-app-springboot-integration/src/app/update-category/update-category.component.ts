import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  private category:Category;
  constructor(private categoryService:CategoryService,private router:Router) { 
    this.category=new Category();
  }
  public updateCategory():void{
    this.categoryService.updateCategory(this.category).subscribe(res=>{
     // this.product=new Product();
      this.router.navigate(['/categoryList']);
    }
     )
  }

  ngOnInit() {
  }

}

