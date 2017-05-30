import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, ConnectionBackend, RequestOptions, XHRBackend} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './user/login/login.component';
import {ContactComponent} from './contact/contact.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {ContactService} from "./contact/services/contact.service";
import {DialogService} from "./contact/services/dialog.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule, MdButtonModule, MdCheckboxModule} from "@angular/material";
import {ContactDialogComponent} from './contact/contact-dialog/contact-dialog.component';
import {MapDialogComponent} from './contact/map-dialog/map-dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {RouterModule} from "@angular/router";
import {ContactApiService} from "./contact/services/contact-api.service";
import {ContactLocalstorageService} from "./contact/services/contact-localstorage.service";
import {VibrationDirective} from './contact/services/vibration.directive';
import {DeviceService} from "./contact/services/device.service";
import {UserService} from "./user/services/user.service";
import {AuthenticationService} from "./user/services/authentication.service";
import {HTTPService} from "./user/services/http.service";

const routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export function getHttp(backend: ConnectionBackend, options: RequestOptions) {
  return new HTTPService(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    ContactAddressPipe,
    VibrationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactService, DialogService, ContactApiService, ContactLocalstorageService, DeviceService, UserService, AuthenticationService, {provide: HTTPService, useFactory: getHttp, deps:[XHRBackend, RequestOptions]}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ContactDialogComponent, MapDialogComponent]
})
export class AppModule {
}
