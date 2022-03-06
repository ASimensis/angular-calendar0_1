import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupSheetComponent } from './add-group-sheet.component';

describe('AddGroupSheetComponent', () => {
  let component: AddGroupSheetComponent;
  let fixture: ComponentFixture<AddGroupSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroupSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
