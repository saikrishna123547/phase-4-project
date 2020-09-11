import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  private user:User;
  constructor(private userService:UserService,private router:Router) { 
    this.user=new User();
  }
  public addUser():void{
    this.userService.addUser(this.user).subscribe(res=>{
      this.user=new User();
      this.router.navigate(['/userList']);
    }
     )
  }
  ngOnInit() {
  }

}


