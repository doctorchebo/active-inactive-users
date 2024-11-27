import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private usersService: UsersService) {
    this.usersService.activeAdded.subscribe(() => (this.activeCount += 1));
    this.usersService.inactiveAdded.subscribe(() => (this.inactiveCount += 1));
  }

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  activeCount: number = 0;
  inactiveCount: number = 0;
  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
