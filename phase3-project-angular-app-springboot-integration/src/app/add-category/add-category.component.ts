import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  private category:Category;
  constructor(private categoryService:CategoryService,private router:Router) { 
    this.category=new Category();
  }
  public addCategory():void{
    this.categoryService.addCategory(this.category).subscribe(res=>{
      this.category=new Category();
      this.router.navigate(['/categoryList']);
    }
     )
  }
  ngOnInit() {
  }

}

