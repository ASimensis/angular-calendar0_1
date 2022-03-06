import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarEvent } from 'calendar-utils';
import { EventServiceService } from '../../services/event-service.service';
import { Group } from 'src/app/models/Group';
import { GroupServiceService } from 'src/app/services/group-service.service';

@Component({
  selector: 'app-calendar-views',
  templateUrl: './calendar-views.component.html',
  styleUrls: ['./calendar-views.component.css']
})
export class CalendarViewsComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();

  CalendarView = CalendarView;

  sessionData = JSON.parse(sessionStorage.getItem('user') || '{}');

  @Output() dateClicked: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() singleEventClicked: EventEmitter<{}> = new EventEmitter<{}>();

  events: CalendarEvent[] = [];
  groupEvents: CalendarEvent[] = [];

  userGroups: Group[] | undefined; 
  status: string = '';
  groupID: number = 0;

  constructor(private eventService: EventServiceService, 
    private groupService: GroupServiceService) { }

  ngOnInit(): void {
    
    this.getEvents(this.sessionData.id);
    this.getUserGroups(this.sessionData.id);
  }
  
  setView(view: CalendarView) {
    this.view = view;
  }
  
  async getEvents(userid: number): Promise<void> {
    
    this.events = (await this.eventService.getEventsByUserID(userid).toPromise());
    this.events = this.events.map((item: any) => ({...item, start: new Date(item.start_date), end: new Date(item.end_date), title: item.task_name})); 
  }

  getUserGroups(userid: number): void {
    this.groupService.getGroupByUserID(this.sessionData.id).subscribe((response) =>
    this.userGroups = response);
  }
  dayClicked({date, events}: {date: Date; events: CalendarEvent[] }): void {
    console.log(events);
    this.dateClicked.emit(events);
  }

  eventClicked(event: CalendarEvent): void {
    var eventArray: CalendarEvent[] = [];
    eventArray.push(event);
    this.singleEventClicked.emit(eventArray);
  }

  async getGroupEvents(groupID: any): Promise<void> {
    this.groupEvents = (await this.eventService.getEventsByGroupID(groupID).toPromise());
    this.groupEvents = this.groupEvents.map((item: any) => ({...item, start: new Date(item.start_date), end: new Date(item.end_date), title: item.task_name}));
    console.log(this.groupEvents);
  }

  reload(): void {
    window.location.reload();
  }
}
