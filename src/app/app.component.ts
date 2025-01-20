import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './services/user.service';
import {  HttpClient } from '@angular/common/http';


//https://github.com/40x/httpclient/blob/master/src/app/app.component.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private userService: UserService) {
    this.userService.getUsers()
      .subscribe((resp: User[]) => {
        console.log(resp);
      });
  }
}

