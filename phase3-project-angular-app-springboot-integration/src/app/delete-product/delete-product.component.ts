import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  private product:Product;
  constructor(private productService:ProductService,private router:Router) {
   this.product=new Product(); 
   }
   public deleteProduct():void{
     
    this.productService.deleteProduct(2).subscribe();
             this.product=new Product();
      this.router.navigate(['/productList']);
     }
 
   
 
  ngOnInit() {
  }

}