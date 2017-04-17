import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {

  @Input() address : string;

//  httpUrl: string = "http://maps.google.com/maps/place/";
 // htmlUrl: string = this.httpUrl + this.address + '&output=embed';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
  }

}

