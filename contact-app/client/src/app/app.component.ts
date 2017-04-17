import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from "./contact/contact";
import {ContactService} from "./contact/services/contact.service";
import {DialogService} from "./contact/services/dialog.service";
import {ContactDialogComponent} from "./contact/contact-dialog/contact-dialog.component";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contacts: Contact[];
  dialog;
 // @Output() edit: EventEmitter<Contact> = new EventEmitter();
 // @Output() editInDialog: EventEmitter<Contact> = new EventEmitter();
  // @Output() remove: EventEmitter<Contact[]> = new EventEmitter();

// asks contacts and transfers them
  constructor(private contactService: ContactService, private dialogService: DialogService) { // Error
    this.contacts = contactService.showContacts();
 //   this.dialog = dialogService.contactDialog();
  }

  dialogShow(contact){
    this.dialog = this.dialogService.contactDialog(contact);
  }

  contactEdit(contact: Contact) {
    console.log("app");
    return this.dialogShow(contact);
  }

  contactRemove(contact: Contact) {
  return this.contactService.removeContact(contact);
  }

  contactShowOnMap(contact: Contact) {
    let address: string = contact.address + "," + contact.city;
    let httpUrl: string = "http://maps.google.com/maps/place/";
    return this.dialogService.mapDialog(httpUrl + address.replace(" ", "") + "&output=embed")
  }

  addContact(){
    return this.dialogService.contactDialog();
  }

  updateContacts() {
    console.log("add");
  }

}
