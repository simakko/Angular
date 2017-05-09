import { Injectable } from '@angular/core';
import {ContactStorage} from "./contact-storage";
import {Contact} from "../contact";
import {Observable} from "rxjs";

@Injectable()
export class ContactLocalstorageService implements ContactStorage{

  private key: string = "localStorageKey";

  constructor() {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify([]));
    }
  }

  saveContacts(contact: Contact) {
    return contact.id ? this.editContact(contact) : this.addNewContact(contact);
  }

  findContacts(): Observable<any> {
    let contacts = this.readLocalStorage();
    return Observable.of(contacts);
  }

  private readLocalStorage() {
    let data = localStorage.getItem(this.key);
    return JSON.parse(data);
  }

  public addNewContact(contact: Contact) {
    let contacts = this.readLocalStorage();
    contact.id = contacts.length ? contacts[contacts.length-1].id + 1 : 0;
    contacts.push(contact);
    localStorage.setItem(this.key, JSON.stringify(contacts));
    return Observable.of(contact);
  }

  public editContact(contact:Contact){
    let contacts = this.readLocalStorage();
    contacts[contact.id] = contact;
    localStorage.setItem(this.key, JSON.stringify(contacts));
    return Observable.of(contact);
  }

  public removeContact(contact: Contact) {
    let contacts = this.readLocalStorage();
    let index = contacts.findIndex(id => contact.id == id.id);
    let contactList = [];
    for (let i = 0; i < contacts.length; i++) {
      if (i != index) {
        contactList.push(contacts[i]);
      }
    }
    localStorage.setItem(this.key, JSON.stringify(contactList));
    return Observable.of(contactList);
  }
}
