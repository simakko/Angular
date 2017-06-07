import {Component, OnInit} from '@angular/core';
import {ContactService} from "./services/contact.service";
import {DialogService} from "./services/dialog.service";
import {Contact} from "./contact";
import * as _ from 'lodash';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];
  dialog;

  constructor(private contactService: ContactService, private dialogService: DialogService) {
    this.contacts = [];
    this.reloadContacts();
  }

  reloadContacts() {
    return this.contactService.findAllContacts().subscribe(contacts => { //subscribe sends the http-request
      this.contacts = contacts;
    });
  }

  dialogShow(contact) {
    this.dialog = this.dialogService.contactDialog(contact);
  }

  contactEdit(contact: Contact) {
    return this.dialogService.contactDialog(contact).subscribe(contact => {
      if (contact) {
        this.contactService.editContact(contact).subscribe(edit => {
          this.reloadContacts();
        });
      }
    });
  }

  contactRemove(contact: Contact) {
    this.contactService.removeContact(contact).subscribe(remove => {
      this.reloadContacts();
    });
    return;
  }

  contactShowOnMap(contact: Contact) {
    let address: string = contact.address + "," + contact.city;
    let httpUrl: string = "http://www.google.com/maps?output=embed&q=";
    return this.dialogService.mapDialog(httpUrl + address.replace(" ", ""));
  }

  addContact() {
    return this.dialogService.contactDialog().subscribe(contact => {
      if (contact) {
        this.contactService.addNewContact(contact).subscribe(add => {
          this.reloadContacts();
        });
      }
    });
  }

  ngOnInit() {
  }
}
