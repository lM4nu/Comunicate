import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DATA } from '../../cards-info';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor(public localStorageService: LocalStorageService) {}

  cards: any;

  ngOnInit(): void {
    if (this.localStorageService.isEmptyPairs()) {
      this.localStorageService.setPairs(DATA);
    } else {
      this.localStorageService.imgPairs = this.localStorageService.getPairs();
    }
    //this.navbar();
  }
}
