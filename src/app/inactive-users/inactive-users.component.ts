import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../userService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  //@Input() 
  users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();

  ngOnInit(){
    this.users=this.userService.inactiveUsers;
  }

  constructor(private userService :UserService){}

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
