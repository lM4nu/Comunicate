import { Component, OnInit } from '@angular/core';
import { DATA } from '../cards-info';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor() {}

  cards: any;

  ngOnInit(): void {
    this.cards = DATA;
    this.navbar();
  }

  navbar(): void {
    const btn = document.querySelector('.btn') as HTMLButtonElement;
    const nav = document.querySelector('.navbar') as HTMLElement;

    btn.addEventListener('click', (): void => {
      nav.classList.toggle('activo');
      btn.classList.toggle('btn-white');
    });
  }
}
