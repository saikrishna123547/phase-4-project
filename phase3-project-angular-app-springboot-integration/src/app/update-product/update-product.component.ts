import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  private product:Product;
  constructor(private productService:ProductService,private router:Router) { 
    this.product=new Product();
  }
  public updateProduct():void{
    this.productService.updateProduct(this.product).subscribe(res=>{
     // this.product=new Product();
      this.router.navigate(['/productList']);
    }
     )
  }

  ngOnInit() {
  }

}
