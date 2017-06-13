import {Component, Input, OnInit} from '@angular/core';
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
  title: string = "EDIT CONTACT";

  constructor(private dialog: MdDialogRef<ContactDialogComponent>) {
  }

  ngOnInit() {
    if(!this.contact){
      this.title = "ADD CONTACT";
      this.contact = new Contact();
    }
  }

  saveContact(){
    if(!this.contact.firstName && !this.contact.lastName && !this.contact.address && !this.contact.city && !this.contact.phoneNumber){
      this.dialog.close();
    }else {
      this.dialog.close(this.contact);
    }
  }
}
