import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input()
  private gameIsClosed: boolean;
  @Output()
  private emitGameStatus = new EventEmitter<boolean>();
  gameStatus = false;
  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.gameStatus = this.gameIsClosed;
    this.gameStatus = !this.gameStatus;
    this.emitGameStatus.emit(this.gameStatus);
  }
}
