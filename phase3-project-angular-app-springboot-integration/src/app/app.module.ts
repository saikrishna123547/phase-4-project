import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { UpdatePurchaseComponent } from './update-purchase/update-purchase.component';
import { DeletePurchaseComponent } from './delete-purchase/delete-purchase.component';
import { PurchaseService } from './purchase.service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductService } from './product.service';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { CategoryService } from './category.service';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    AddPurchaseComponent,
    PurchaseListComponent,
    UpdatePurchaseComponent,
    DeletePurchaseComponent,
    AddProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AddCategoryComponent,
    CategoryListComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    AddUserComponent,
    UserListComponent,
    UpdateUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PurchaseService,ProductService,CategoryService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
