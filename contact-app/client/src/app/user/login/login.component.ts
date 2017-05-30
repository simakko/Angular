import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as _ from 'lodash';
import {UserService} from "../services/user.service";
import {User} from "../user";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;
    error: string;
    signInButton: boolean = false;

  constructor(private router: Router, private userService: UserService, private app: AppComponent) {
  }

  ngOnInit() {
  }

  navigateToContactListing() {
    this.router.navigate(['/contact']);
  }

  signIn(){
      this.userService.signIn(this.username, this.password).subscribe(data => {
        console.log("data " +data.json());
        this.app.user = data.json();
        this.navigateToContactListing();
      }, error => {
          this.signInButton = true;
          this.error = "Oh no, error occurred. Your screwed!";
        });
  }
}
