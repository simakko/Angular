import { Injectable } from '@angular/core';
import {Contact} from "../contact";
import {MdDialog} from "@angular/material";
import {ContactDialogComponent} from "../contact-dialog/contact-dialog.component";
import {MapDialogComponent} from "../map-dialog/map-dialog.component";

@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) {}

  public contactDialog(contact?: Contact){
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed();
  }

  public mapDialog(address: string){
    console.log(address);
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.address = address;
    return dialogRef.afterClosed();
  }
}
