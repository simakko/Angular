/*
import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {User} from "../user";

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });

  function userList(){
    return [
      new User(1, 'username', 'password', 'email')
    ]
  }

  it('#authenticate should get token from server', inject([AuthenticationService], (service: AuthenticationService) => {
    let user = userList();
    service.authenticate(this.user.userName, this.user.password).subscribe(data => {

    });
  }));
});
*/
