import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { Todos } from 'src/app/shared/todos';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-selected-user-todos',
  templateUrl: './selected-user-todos.component.html',
  styleUrls: ['./selected-user-todos.component.scss'],
})
export class SelectedUserTodosComponent implements OnChanges, OnDestroy {
  @Input() currentUser: User;

  uTodos: Todos[];
  private saveSubscription: Subscription;

  constructor(private _uService: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentUser'] && this.currentUser != null) {
      if (this.saveSubscription != null) {
        this.saveSubscription.unsubscribe();
      }

      this._uService
        .GetTodos(this.currentUser)
        .subscribe((u) => (this.uTodos = u));
    }
  }
  ngOnDestroy(): void {
    if (this.saveSubscription != null) {
      this.saveSubscription.unsubscribe();
    }
  }
}
