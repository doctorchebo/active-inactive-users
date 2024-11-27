import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css',
})
export class InactiveUsersComponent {
  users: string[] = [];
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  toggleStatus(id: number) {
    this.usersService.updateToActive(id);
  }
}
