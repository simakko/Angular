import {Injectable} from '@angular/core';

@Injectable()
export class DeviceService {

  cordova: boolean = false;

  constructor() {
    document.addEventListener('deviceready', () => {
      this.cordova = true;
    }, false);
  }

  public vibration() {
    if (this.cordova) {
      navigator.vibrate(100);
    }
  }
}
