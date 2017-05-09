import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateToListing() {
    this.router.navigate(['/contact']);
  }

  buttonClick() {
    if (this.username == "qwerty" || this.password == "qwerty") {
      this.navigateToListing();
    }else{
      this.navigateToListing();
    }
  }
}
