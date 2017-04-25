import {Injectable} from '@angular/core';
import {Contact} from "../contact";
import {ContactApiService} from "./contact-api.service";
import {ContactStorage} from "./contact-storage";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ContactLocalstorageService} from "./contact-localstorage.service";

@Injectable()
export class ContactService{

  contactStorage: ContactStorage;

  constructor(private  contactApiService: ContactApiService, private contactLocalStorage: ContactLocalstorageService) {
    this.contactStorage = environment.endpointUrl ? contactApiService : contactLocalStorage;
  }

  public findAllContacts() {
    return this.contactStorage.findContacts();
  }

  public editContact(contact: Contact){
    return this.contactStorage.saveContacts(contact);
  }

  public removeContact(contact: Contact){
    return this.contactStorage.removeContact(contact);
  }

  public addNewContact(contact: Contact){
    return this.contactStorage.saveContacts(contact);
  }
}
