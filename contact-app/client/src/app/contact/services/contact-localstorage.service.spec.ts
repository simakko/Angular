import {TestBed, inject} from '@angular/core/testing';

import {ContactLocalstorageService} from './contact-localstorage.service';
import {Contact} from "../contact";
import * as _ from 'lodash';

describe('ContactLocalstorageService', () => {

  let localStorageKey = 'localStorageKey';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactLocalstorageService]
    });
  });

  //Local Storage Mock
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value;
    });
  });

  function contactArray(){
    return [
      new Contact(1, 'FirstName', 'LName', '2352352', 'Street 1', 'City'),
      new Contact(2, 'FirstName', 'LName', '2352352', 'Street 2', 'City')
    ]
  }


  it('should initialize storage', inject([ContactLocalstorageService], (service: ContactLocalstorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]); //Test if data is equal to a table
  }));

  it('#findContacts Should find all contacts', inject([ContactLocalstorageService], (service: ContactLocalstorageService) => {
    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    let contactIds = _.map(contacts, 'id');
    service.findContacts().subscribe((contacts:Contact[]) =>{
      expect(contacts.length).toBe(2);
      _.forEach(contacts, function (c) {
        expect(contactIds).toContain(c.id);
      })
    });
  }));
});
