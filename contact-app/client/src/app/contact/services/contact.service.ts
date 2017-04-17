import {Injectable} from '@angular/core';
import {Contact} from "../contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];
  private key: "localStorageKey";

  constructor() {

    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify([]));
    }

    this.contacts = [
      new Contact(0, 'Irmeli', 'Härkönen', '0502345678', 'Tie 5', 'Kaupunki'),
      new Contact(1, 'Pekka', 'Härkönen', '0502345678', 'Tie 5', 'Kaupunki')
    ];
  }

  public showContacts(): Contact[] {
    return this.contacts;
  }

  public updateContacts(contacts: Contact[]) {
    localStorage.setItem(this.key, JSON.stringify(contacts));
  }

  public removeContact(contact: Contact){
    this.contacts.slice(contact.id, 1);
  }
}
