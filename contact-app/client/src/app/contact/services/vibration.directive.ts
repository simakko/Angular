import {Directive, HostListener} from '@angular/core';
import {DeviceService} from "./device.service";

@Directive({
  selector: '[vibration]'
})
export class VibrationDirective {

  constructor(private deviceService: DeviceService) {
  }

  @HostListener('click', ['$event']) onClick() {
    this.deviceService.vibration();
  }
}


