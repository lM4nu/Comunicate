import { Component, Input, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() info: any;

  constructor(private speechService: SpeechService) { }

  ngOnInit(): void {
  }

  setFilterValues(blur: number, saturate: number, contrast: number, brightness: number): void {
    const img = (document.querySelector('img') as HTMLImageElement);
  }

  hablar(input: string) {
    this.speechService.hablar(input);
  }
}
