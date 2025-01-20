import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Component } from '@angular/core';


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
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users: User[]) => users.map(user => new User(user))));
  }
}



export class User {
  id!: string;
  name!: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name.toUpperCase();
  }

  };




