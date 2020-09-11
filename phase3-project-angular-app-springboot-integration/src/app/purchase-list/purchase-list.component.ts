import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  private purchaseList:Purchase[];
  constructor(private purchaseService:PurchaseService) { }

  ngOnInit() {
    this.purchaseService.getAllItems().subscribe(res=>{
      this.purchaseList=res;
    });
  }

}
