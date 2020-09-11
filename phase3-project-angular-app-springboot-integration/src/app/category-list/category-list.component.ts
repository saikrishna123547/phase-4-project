import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  private categoryList:Category[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getALLCategories().subscribe(res=>{
      this.categoryList=res;
    });
  }

}


