import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../game/card/card.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  title: string = 'Opciones';
  saturate_value: number = 100;
  blur_value: number = 0;
  brightness_value: number = 100;
  contrast_value: number = 100;

  constructor() {
  }

  ngOnInit(): void {
    this.settings();
  }

  settings(): void {
    const i_contrast = (document.querySelector('#input-contrast') as HTMLInputElement);
    const i_brightness = (document.querySelector('#input-brightness') as HTMLInputElement);
    const i_blur = (document.querySelector('#input-blur') as HTMLInputElement);
    const i_saturate = (document.querySelector('#input-saturate') as HTMLInputElement);

    const img = (document.querySelector('.imagen') as HTMLImageElement)

    i_saturate.addEventListener('change', (): void => {
      this.saturate_value = parseInt(i_saturate.value);
      img.style.cssText = `filter: saturate(${this.saturate_value}%) blur(${this.blur_value}px) contrast(${this.contrast_value}%) brightness(${this.brightness_value}%);`;
    });
    i_blur.addEventListener('change', (): void => {
      this.blur_value = parseInt(i_blur.value);
      img.style.cssText = `filter: saturate(${this.saturate_value}%) blur(${this.blur_value}px) contrast(${this.contrast_value}%) brightness(${this.brightness_value}%);`;
    });
    i_contrast.addEventListener('change', (): void => {
      this.contrast_value = parseInt(i_contrast.value);
      img.style.cssText = `filter: saturate(${this.saturate_value}%) blur(${this.blur_value}px) contrast(${this.contrast_value}%) brightness(${this.brightness_value}%);`;
    });
    i_brightness.addEventListener('change', (): void => {
      this.brightness_value = parseInt(i_brightness.value);
      img.style.cssText = `filter: saturate(${this.saturate_value}%) blur(${this.blur_value}px) contrast(${this.contrast_value}%) brightness(${this.brightness_value}%);`;
    });
  }

}