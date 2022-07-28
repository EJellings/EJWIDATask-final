import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { AssignUser, User } from 'src/app/shared/user';

@Component({
  selector: 'app-selected-user-edit',
  templateUrl: './selected-user-edit.component.html',
  styleUrls: ['./selected-user-edit.component.scss']
})
export class SelectedUserEditComponent implements OnChanges, OnDestroy{

  @Input() currentUser:User;

  private saveSubscription:Subscription;
  saving:boolean;

  constructor(private _uService:UserService) { }


  ngOnChanges(changes: SimpleChanges): void {

    if(changes['currentUser'] && this.currentUser != null){

      const clone = AssignUser(this.currentUser);
      this.currentUser = clone;
    }
  }

  saveAll():void{

    this.saving = true;
    if(this.saveSubscription != null){
      this.saveSubscription.unsubscribe();
    }
    this.saveSubscription = this._uService.PutUser(this.currentUser)
                  .pipe(
                    finalize(() => this.saving = false)
                  )
                  .subscribe(s => {
                    this.currentUser = s;
                  });

  }

  ngOnDestroy(): void {

    if(this.saveSubscription != null){
      this.saveSubscription.unsubscribe();
    }

  }


}
