import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clon-de-Hablalo';

  ngOnInit(): void {

    if(!localStorage.getItem('saturate')) {
      localStorage.setItem('saturate', '100');
    }
    if(!localStorage.getItem('blur')) {
      localStorage.setItem('blur', '0');
    }
    if(!localStorage.getItem('brightness')) {
      localStorage.setItem('brightness', '100');
    }
    if(!localStorage.getItem('contrast')) {
      localStorage.setItem('contrast', '100');
    }
  }
}
