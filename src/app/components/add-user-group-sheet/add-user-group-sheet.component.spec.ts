import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserGroupSheetComponent } from './add-user-group-sheet.component';

describe('AddUserGroupSheetComponent', () => {
  let component: AddUserGroupSheetComponent;
  let fixture: ComponentFixture<AddUserGroupSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserGroupSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserGroupSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
