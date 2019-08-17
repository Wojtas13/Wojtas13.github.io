import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  isOpen = false;

  @Output()
  private isMenuOpen = new EventEmitter<boolean>();

  constructor() { }
  ngOnInit() {
  }

  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
    this.isMenuOpen.emit(this.isOpen);
  }
}
