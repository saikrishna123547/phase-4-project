import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { DeletePurchaseComponent } from './delete-purchase/delete-purchase.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { UpdatePurchaseComponent } from './update-purchase/update-purchase.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  //  for purchase controller 
  {path:'addPurchase',component:AddPurchaseComponent},
  {path:'deletePurchase',component:DeletePurchaseComponent},
  {path:'updatePurchase',component:UpdatePurchaseComponent},
  {path:'purchaseList',component:PurchaseListComponent},

  //  for product controller
  {path:'addProduct',component:AddProductComponent},
  {path:'deleteProduct',component:DeleteProductComponent},
  {path:'updateProduct',component:UpdateProductComponent},
  {path:'productList',component:ProductListComponent},


 //  for category controller
 {path:'addCategory',component:AddCategoryComponent},
 {path:'deleteCategory',component:DeleteCategoryComponent},
 {path:'updateCategory',component:UpdateCategoryComponent},
 {path:'categoryList',component:CategoryListComponent},

  //  for user controller
  {path:'addUser',component:AddUserComponent},
  {path:'deleteUser',component:DeleteUserComponent},
  {path:'updateUser',component:UpdateUserComponent},
  {path:'userList',component:UserListComponent}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
