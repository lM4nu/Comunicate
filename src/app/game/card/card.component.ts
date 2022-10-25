import { Component, Input, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() info: any;

  valor_filtros: string | undefined;

  constructor(private speechService: SpeechService) { }

  ngOnInit(): void {
    this.valor_filtros = `filter: saturate(${localStorage.getItem('saturate')}%) blur(${localStorage.getItem('blur')}px) brightness(${localStorage.getItem('brightness')}%) contrast(${localStorage.getItem('contrast')}%);`;
  }

  hablar(input: string) {
    this.speechService.hablar(input);
  }
}
