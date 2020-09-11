import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private userList:User[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res=>{
      this.userList=res;
    });
  }

}
