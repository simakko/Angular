import {Component, HostListener, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MdSidenav} from "@angular/material";
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sidenavMode: string;

  constructor(private router: Router) {
    this.onWindowResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    let width = event ? event.target.innerWidth : window.innerWidth;
    this.sidenavMode = width >= 600 ? 'side' : 'over';
  }

  OnInit(){
  }
}
