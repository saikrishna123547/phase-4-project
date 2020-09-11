import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { PurchaseService } from '../purchase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-purchase',
  templateUrl: './update-purchase.component.html',
  styleUrls: ['./update-purchase.component.css']
})
export class UpdatePurchaseComponent implements OnInit {

  private purchase:Purchase;
  constructor(private purchaseService:PurchaseService,private router:Router) { 
    this.purchase=new Purchase();
  }
  public updatePurchase():void{
    this.purchaseService.updatePurchase(this.purchase).subscribe(out=>{
    // this.purchase=new Purchase();
      this.router.navigate(['/purchaseList']);
    }
     )
  }

  ngOnInit() {
  }

}
