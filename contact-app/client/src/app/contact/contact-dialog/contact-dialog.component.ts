import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Contact} from "../contact";
import {DialogService} from "../services/dialog.service";
import {MdDialog, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  @Input() contact: Contact;

  firstname: string;
  lastname: string;
  address: string;
  city: string;
  phonenumber: string;

  constructor(private dialogRef: MdDialogRef<Contact>) {
  }

  ngOnInit() {
  }

  close(){
    console.log("close");
    this.contact.firstName = this.firstname;
    this.contact.lastName = this.lastname;
    this.contact.address = this.address;
    this.contact.city = this.city;
    this.contact.phoneNumber = this.phonenumber;

    this.dialogRef.close();
  }
}
