import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { USER_TOKEN } from './../../app.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  constructor(@Inject(USER_TOKEN) private userService: UserService){

  }

  name: string = '';
  age: number = 0;
  city: string = '';
  dob: string = '';

  CreateNewUser(){
    this.userService.CreateUser(this.name,this.age,this.city,this.dob);
  }
}
