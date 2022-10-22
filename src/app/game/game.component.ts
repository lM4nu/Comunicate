import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.navbar();
  }

  navbar(): void {
    const btn = (document.querySelector('.btn') as HTMLButtonElement);
    const nav = (document.querySelector('.navbar') as HTMLElement);

    
    btn.addEventListener('click', (): void => {
      nav.classList.toggle('activo');
      btn.classList.toggle('btn-white');
    });
  }

}

