import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Component } from '@angular/core';

/* 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private userService: UserService) {

    //this.userService.getDummyData().subscribe((response:Observable<any>) => { console.log(response); });
    console.log('test');
    this.userService.getDummyData();
    

    this.userService.getUsers()
      .subscribe((resp: User[]) => {
        console.log(resp);
      });


  }
 }

 */

import { map } from 'rxjs/operators';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsersNames() {
    throw new Error('Method not implemented.');
  }

  img1!: object;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users: User[]) => users.map(user => new User(user))));
  }
  getUserData(): Observable<User[]> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users: User[]) => users.map(user => new User(user))));
  }
  getPic(): Observable<Pic> {
    return this.http
      .get<Pic>('https://localhost:7159/api/Images?searchString=aa');
  }

  getDummyData(){
    this.http.get('https://localhost:7159/api/Images?searchString=aa')
    .subscribe(img => {console.log(img.toString()); this.img1 = img; });
  }

  getDummyData2(){
    this.http.get('https://localhost:7159/api/Images?searchString=aa');
  }

// imageUrl: string
  getImage(): Observable<Blob> {
    return this.http.get('https://localhost:7159/api/Images?searchString=aa', { responseType: 'blob' });
  }

  getImage2(): Observable<Pic> {
    return this.http.get<Pic>('https://localhost:7159/api/Images?searchString=aa');
  }

}


export class User {
  id!: string;
  name!: string;
  img!: File;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name.toUpperCase();
  }

  };


  export class Pic {
    img!: File;
  
    constructor(pict: Pic) {
      this.img = pict.img;
    }
  
    };

    export class Pic2 {
      img!: Promise<Uint8Array>;
    
      constructor(pict: Pic2) {
        this.img = pict.img;
      }
    
      };




