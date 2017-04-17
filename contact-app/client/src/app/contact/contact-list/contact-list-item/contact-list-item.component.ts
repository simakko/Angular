import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Contact} from "../../contact";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})

export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Input() edit: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() showOnMap: EventEmitter<Contact>;

  constructor() {}

  ngOnInit() {
  }

  onEdit(contact: Contact){
    return this.edit.emit(contact);
  }

  onDelete(contact: Contact){
    return this.remove.emit(contact);
  }

  onMap(contact:Contact){
    return this.showOnMap.emit(contact);
  }
}
