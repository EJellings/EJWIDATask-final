import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedUserEditComponent } from './selected-user-edit.component';

describe('SelectedUserEditComponent', () => {
  let component: SelectedUserEditComponent;
  let fixture: ComponentFixture<SelectedUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedUserEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
