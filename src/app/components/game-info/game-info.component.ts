import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
  @Input()
  private gameIsOpen: boolean;
  @Output()
  private gameIsClosed = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  closeInfo() {
    this.gameIsOpen = !this.gameIsOpen;
    this.gameIsClosed.emit(this.gameIsOpen);
  }

}
