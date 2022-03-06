import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventspageComponent } from './eventspage.component';

describe('EventspageComponent', () => {
  let component: EventspageComponent;
  let fixture: ComponentFixture<EventspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
