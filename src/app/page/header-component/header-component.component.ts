import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  public scrolled = false;
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
  constructor() { }

  ngOnInit() {
  }

}
