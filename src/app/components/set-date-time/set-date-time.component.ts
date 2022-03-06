import { Component, OnInit } from '@angular/core';
import { calendarTask } from 'src/app/models/calendarTask';
import { EventServiceService } from 'src/app/services/event-service.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Group } from 'src/app/models/Group';
import { GroupServiceService } from 'src/app/services/group-service.service';

@Component({
  selector: 'app-set-date-time',
  templateUrl: './set-date-time.component.html',
  styleUrls: ['./set-date-time.component.css']
})
export class SetDateTimeComponent implements OnInit {
  sessionData = JSON.parse(sessionStorage.getItem('user') || '{}');

  start: any;
  end: any;
  title: string = '';
  description: string = '';
  groupID: any= null; 
  
  userGroups: Group[] | undefined; 
  
  constructor(private eventService: EventServiceService, 
    private bottomSheet: MatBottomSheet,
    private groupService: GroupServiceService) { }

  ngOnInit(): void {
    this.getUserGroups(this.sessionData.id);
  }

  createTask(): void{
    const newTask: calendarTask = {
      task_name: `${this.title}`,
      group_id: `${this.groupID}`,
      description: `${this.description}`,
      start_date: new Date(`${this.start}`),
      end_date: new Date(`${this.end}`)
    }
    if(this.sessionData.user_type === 'REGULAR' || this.groupID === null){
      newTask.user_id = `${this.sessionData.id}`;
    }

    console.log(newTask);
    this.eventService.createNewEvent(newTask).subscribe((response) => console.log(JSON.stringify(response)));
    this.bottomSheet.dismiss();
    window.location.reload();
  }
  
  getUserGroups(userid: number): void {
    this.groupService.getGroupByUserID(this.sessionData.id).subscribe((response) =>
    this.userGroups = response);
  }
  assignID(groupID: any): void{
    this.groupID = groupID;
  }
}
