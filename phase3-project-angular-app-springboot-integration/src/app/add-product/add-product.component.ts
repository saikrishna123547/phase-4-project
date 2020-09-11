import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private product:Product;
  constructor(private productService:ProductService,private router:Router) { 
    this.product=new Product();
  }
  public addProduct():void{
    this.productService.addProduct(this.product).subscribe(res=>{
      this.product=new Product();
      this.router.navigate(['/productList']);
    }
     )
  }
  ngOnInit() {
  }

}
