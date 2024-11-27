import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css',
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
  toggleStatus(id: number) {
    this.usersService.updateToInactive(id);
  }
}
