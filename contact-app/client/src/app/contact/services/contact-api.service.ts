import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";
import {ContactStorage} from "./contact-storage";

@Injectable()
export class ContactApiService implements ContactStorage{

  url = environment.endpointUrl + '/contacts';

  constructor(private http: Http) {
  }

  findContacts() {
    return this.http.get(this.url).map(response => response.json() as Contact[]);
  }

  saveContacts(contact: Contact){
  return contact.id ?  this.updateContact(contact) : this.createContact(contact);
  }

  createContact(contact: Contact){
    return this.http.post(this.url, contact);
  }

  updateContact(contact: Contact){
    return this.http.put(this.url + '/' +contact.id, contact);
  }

  removeContact(contact: Contact){
    return this.http.delete(this.url + '/' +contact.id, contact);
  }
}
