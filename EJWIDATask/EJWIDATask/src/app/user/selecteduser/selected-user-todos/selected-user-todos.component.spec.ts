import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedUserTodosComponent } from './selected-user-todos.component';

describe('SelectedUserTodosComponent', () => {
  let component: SelectedUserTodosComponent;
  let fixture: ComponentFixture<SelectedUserTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedUserTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedUserTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
