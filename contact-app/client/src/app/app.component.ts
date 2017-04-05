import { Component } from '@angular/core';
import {Contact} from "./contact/contact";
import {ContactService} from "./contact/services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact list';
  contacts: Contact[];
  selectedContact: Contact;

// asks contacts and transfers them
  constructor(contactService: ContactService){
    this.contacts = contactService.showContacts();
  }
/*
  contactSelected(contact: Contact){
    this.selectedContact = contact;
  }*/
}
