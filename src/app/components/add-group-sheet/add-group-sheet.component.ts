import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Group } from 'src/app/models/Group';
import { GroupServiceService } from 'src/app/services/group-service.service';

@Component({
  selector: 'app-add-group-sheet',
  templateUrl: './add-group-sheet.component.html',
  styleUrls: ['./add-group-sheet.component.css']
})
export class AddGroupSheetComponent implements OnInit {
  sessionData = JSON.parse(sessionStorage.getItem('user') || '{}');
  
  group_name: string = '';
  description: string = '';
  
  

  constructor(private groupService: GroupServiceService, private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  createGroup(): void {
    let newGroup: Group = {
      group_name: this.group_name,
      description: this.description,
      created_by: this.sessionData.id
    }

    this.groupService.createNewGroup(newGroup).subscribe((response) => console.log(response));
    this.bottomSheet.dismiss();
    window.location.reload();
  }

}
