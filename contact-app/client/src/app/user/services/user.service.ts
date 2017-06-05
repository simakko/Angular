import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HTTPService} from "./http.service";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {error} from "util";

@Injectable()
export class UserService {

  url: string = environment.endpointUrl + '/user';

  constructor(private authentication: AuthenticationService, private http: HTTPService) { }

  signIn(username: string, password: string) {
    if (environment.endpointUrl == null) {
      return Observable.of(null);
    } else {
      return this.authentication.authenticate(username, password).flatMap(() => {
        return this.http.put(this.url, null);
      }
      )._catch(error =>{
        console.log("Error occurred: "+ error.status + " " + error.statusMessage);
        return Observable.throw(error);
      });
    }
  }
}
