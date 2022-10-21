import { Component } from '@angular/core';

/**
 * "Tarjeta" es lo que se refiere a la imagen con el titulo
 * que se mostrará en la vista para que el usuario pueda
 * verla e interactuar con ella.
 */
interface Tarjeta {
  image: string;
  title: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clon-de-Hablalo';
}
