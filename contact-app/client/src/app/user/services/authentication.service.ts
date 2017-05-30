import {Injectable, Input} from '@angular/core';
import {HTTPService} from "./http.service";
import {environment} from "../../../environments/environment";
import {Response} from "@angular/http";

@Injectable()
export class AuthenticationService {

  private url: string = environment.endpointUrl + '/authentication';

  constructor(private http: HTTPService) {
  }

  authenticate(userName: string, password: string){
    return this.http.post(this.url, {Username: userName, Password: password}).map((response: Response) =>{
      let responseData = response.json();
      this.http.saveToken(responseData.token);
      return responseData.userId;
    });
  }
}
