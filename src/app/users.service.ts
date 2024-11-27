import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  activeUsers: string[] = ['Marcelo', 'Ivana'];
  inactiveUsers: string[] = ['Tom'];

  //   addActiveUser(user: string, id: number) {
  //     this.activeUsers.push(user);
  //     this.inactiveUsers.splice(id, 1);
  //     this.activeCount += 1;
  //   }
  //   addInactiveUser(user: string, id: number) {
  //     this.inactiveUsers.push(user);
  //     this.activeUsers.splice(id, 1);
  //     this.inactiveCount += 1;
  //   }

  activeAdded = new EventEmitter<void>();
  inactiveAdded = new EventEmitter<void>();
  updateToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.inactiveAdded.emit();
  }
  updateToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activeAdded.emit();
  }
}
