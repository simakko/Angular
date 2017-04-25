import {Contact} from "../contact";
import {Observable} from "rxjs";
export interface ContactStorage {
  saveContacts(contact: Contact);
  removeContact(contact: Contact);
  findContacts(): Observable<any>;
}
