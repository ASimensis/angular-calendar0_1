import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { userGroup } from 'src/app/models/userGroup';
import { GroupServiceService } from 'src/app/services/group-service.service';

@Component({
  selector: 'app-add-user-group-sheet',
  templateUrl: './add-user-group-sheet.component.html',
  styleUrls: ['./add-user-group-sheet.component.css']
})
export class AddUserGroupSheetComponent implements OnInit {
    
    user_name: string = '';
    group_name: string = '';

  constructor(private groupService: GroupServiceService, private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  addUserToGroup(): void {
    let newUserGroup: userGroup = {
      user_name: this.user_name,
      group_name: this.group_name
    }

    this.groupService.addUserToGroup(newUserGroup).subscribe((response) => console.log(response));
    this.bottomSheet.dismiss();
    window.location.reload();
  }
}
