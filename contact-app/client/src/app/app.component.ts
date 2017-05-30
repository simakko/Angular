import {Component, HostListener, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {MdSidenav} from "@angular/material";
import * as _ from 'lodash';
import {User} from "./user/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sidenavMode: string;
  toolbarDisabled: boolean;
  isShadowClassVisible: boolean = false;
  user: User = {id: 1, userName: "Local", password: "Password", email: "local@email.com"};

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private router: Router) {
    this.onWindowResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    let width = event ? event.target.innerWidth : window.innerWidth;
    this.sidenavMode = width >= 600 ? 'side' : 'over';
    if (this.sidenavMode == 'over'){
      this.isShadowClassVisible = false;
    }
    else{
      this.isShadowClassVisible = true;
    }
  }

  ngOnInit(): void {
    console.log(this.sidenav);
    this.onWindowResize(null);
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login')) {
            this.toolbarDisabled = true;
            return;
          }
          this.toolbarDisabled = false;
        }
      });
  }

  sidenavToggle(){
    navigator.vibrate(100);
    this.sidenav.toggle(!this.sidenav._isOpened);
  }
}
