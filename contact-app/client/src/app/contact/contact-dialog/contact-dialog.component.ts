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
  title: string = "Edit contact";

  constructor(private dialog: MdDialogRef<ContactDialogComponent>) {
  }

  ngOnInit() {
    if(!this.contact){
      this.title = "Add contact";
      this.contact = new Contact();
    }
  }

  saveContact(){
    this.dialog.close(this.contact);
  }
}
