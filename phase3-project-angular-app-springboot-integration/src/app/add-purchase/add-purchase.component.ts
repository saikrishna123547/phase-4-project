import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { PurchaseService } from '../purchase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
  private purchase:Purchase;
  constructor(private purchaseService:PurchaseService,private router:Router) { 
    this.purchase=new Purchase();
  }
  public addPurchase():void{
    this.purchaseService.addPurchase(this.purchase).subscribe(res=>{
      this.purchase=new Purchase();
      this.router.navigate(['/purchaseList']);
    }
     )
  }
  ngOnInit() {
  }

}
