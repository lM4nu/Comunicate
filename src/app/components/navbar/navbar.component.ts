import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggle(btn: any, navbar: any) {
    navbar.classList.toggle('activo');
    btn.classList.toggle('btn-white');
  }
}
