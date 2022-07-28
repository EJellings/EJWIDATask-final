import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../core/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  currentUser: User;
  private saveSubscription: Subscription;

  users: User[];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    if (this.saveSubscription != null) {
      this.saveSubscription.unsubscribe();
    }
    this.saveSubscription = this._userService
      .GetAllUsers()
      .subscribe((u) => (this.users = u));
  }

  selectUser(user: User) {
    this.currentUser = user;
  }
  ngOnDestroy(): void {
    if (this.saveSubscription != null) {
      this.saveSubscription.unsubscribe();
    }
  }
}
