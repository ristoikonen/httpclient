import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Pic } from './services/user.service';
import { Pic2 } from './services/user.service';
import { User } from './services/user.service';
import { observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';


//https://github.com/40x/httpclient/blob/master/src/app/app.component.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  names = '';
  receivedData: any;
  receivedData2!: Pic;
  receivedData3: any;
  receivedData4!: any;
  receivedData5!: Pic2;


  constructor(private userService: UserService) {


    this.userService.getUsers()
      .subscribe((resp: User[]) => {
        resp.forEach(u=> (console.log(u.name), this.names += u.name) );
        
      });
      

    //console.log('test');

    this.receivedData = this.userService.getDummyData2();
    this.userService.getPic().subscribe(p => {this.receivedData2.img = p.img; console.log(p.img);});
    this.userService.getPic().subscribe(pic => {
      this.receivedData3 = pic.img;
      //console.log(pic.img);
    });

    this.userService.getPic().subscribe(pic => {
      this.receivedData2 = pic;
      //console.log(pic.img);
    });
    /*

    this.userService.getImage().subscribe(pic => {
      this.receivedData5.img = pic.bytes();
      console.log(pic.type.toString());
    });
*/

    this.userService.getImage2().subscribe(pic => {
      this.receivedData4 = pic.toString();
      console.log(pic.toString());
    });

  }


  getAllUsers() {
    return this.userService.getUsersNames();
  }

  



}

