import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  public scrolled = false;
  public deviceInfo: any;
  public clickShowMenu = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const numb = window.scrollY;
    if (numb >= 100){
      this.scrolled = true;
    }
    else {
      this.scrolled = false;
    }
  }
  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();

  }
  toggleShowHideMenuMobile(){
    this.clickShowMenu = !this.clickShowMenu;
  }

}
