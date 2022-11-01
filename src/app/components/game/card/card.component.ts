import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() info: any;

  @Input() showDelete: any;

  @Input() showAdd: any;

  valor_filtros: string | undefined;

  constructor(
    private speechService: SpeechService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.valor_filtros = `filter: saturate(${localStorage.getItem(
      'saturate'
    )}%) blur(${localStorage.getItem(
      'blur'
    )}px) brightness(${localStorage.getItem(
      'brightness'
    )}%) contrast(${localStorage.getItem('contrast')}%);`;
  }

  hablar(input: string, html: any) {
    if (this.showAdd) {
      const parent = html.parentNode;
      const checked = parent.querySelector('.check').checked;
      checked
        ? (parent.querySelector('.check').checked = false)
        : (parent.querySelector('.check').checked = true);
    } else {
      this.speechService.hablar(input);
    }
  }

  borrar(info: any) {
    const index = this.localStorageService.imgData.indexOf(info);
    this.localStorageService.deleteImgData(index);
  }
}
