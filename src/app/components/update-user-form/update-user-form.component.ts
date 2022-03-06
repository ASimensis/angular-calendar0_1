import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { User } from 'src/app/models/User';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.css']
})
export class UpdateUserFormComponent implements OnInit {
  sessionData = JSON.parse(sessionStorage.getItem('user') || '{}');

  email: string = this.sessionData.email;
  first_name: string = this.sessionData.first_name;
  last_name: string = this.sessionData.last_name;
  user_name: string = this.sessionData.user_name;

  constructor(private userService: UserServiceService, private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  updateUser(): void {
    let updatedUser: User = {
      id: this.sessionData.id,
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      user_name: this.user_name
    }

    this.userService.updateUser(updatedUser).subscribe((response) => console.log(response));
    this.bottomSheet.dismiss();
  }
}
