import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';
import { Product } from '../product';

@Component({
  selector: 'app-delete-purchase',
  templateUrl: './delete-purchase.component.html',
  styleUrls: ['./delete-purchase.component.css']
})
export class DeletePurchaseComponent implements OnInit {
  private purchase:Purchase;
  constructor(private purchaseService:PurchaseService,private router:Router) {
   this.purchase=new Purchase(); 
   }
   public deletePurchase():void{
     
    this.purchaseService.deletePurchase(2).subscribe();
             this.purchase=new Purchase();
      this.router.navigate(['/purchaseList']);
     }
 
   
 
  ngOnInit() {
  }

}
