import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  gameStatus = false;
  gameIsClosed: boolean;

  constructor() { }

  ngOnInit() {
  }

  receiveGameStatus($event) {
    this.gameStatus = $event;
    this.gameIsClosed = this.gameStatus;
  }
}
