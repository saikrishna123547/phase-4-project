import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  private user:User;
  constructor(private userService:UserService,private router:Router) { 
    this.user=new User();
  }
  public updateUser():void{
    this.userService.updateUser(this.user).subscribe(res=>{
     // this.product=new Product();
      this.router.navigate(['/userList']);
    }
     )
  }

  ngOnInit() {
  }

}
