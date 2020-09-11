import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  private user:User;
  constructor(private userService:UserService,private router:Router) {
   this.user=new User(); 
   }
   public deleteUser():void{
     
    this.userService.deleteUser(this.user.id).subscribe();
             this.user=new User();
      this.router.navigate(['/userList']);
     }
 
   
 
  ngOnInit() {
  }

}

