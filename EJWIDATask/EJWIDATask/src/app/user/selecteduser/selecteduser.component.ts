import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-selecteduser',
  templateUrl: './selecteduser.component.html',
  styleUrls: ['./selecteduser.component.scss'],
})
export class SelecteduserComponent implements OnInit {
  @Input() currentUser: User;

  todosToggled: boolean;
  editC: boolean;

  constructor() {}

  ngOnInit(): void {}

  editClicked() {
    this.editC = !this.editC;
  }
}
