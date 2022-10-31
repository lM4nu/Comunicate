import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATA } from 'src/app/cards-info';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css'],
})
export class GaleryComponent implements OnInit {
  constructor(
    public localStorageService: LocalStorageService,
    private router: Router
  ) {}

  model: any = {};

  ngOnInit(): void {
    if (this.localStorageService.isEmptyData()) {
      DATA.forEach((item) => {
        this.localStorageService.addImgData(item);
      });
    } else {
      this.localStorageService.imgData = this.localStorageService.getData();
    }
    //this.navbar();
  }

  //navbar(): void {
  //const btn = document.querySelector('.btn') as HTMLButtonElement;
  //const nav = document.querySelector('.navbar') as HTMLElement;

  //btn.addEventListener('click', (): void => {
  //nav.classList.toggle('activo');
  //btn.classList.toggle('btn-white');
  //});
  //}

  submit() {
    const inputs: any = document.querySelectorAll('.check') as unknown;
    let selected: any = [];
    inputs.forEach((input: any) => {
      const value = input.checked;
      const title = input.parentNode.querySelector('h2');
      const img = input.parentNode.querySelector('img');
      //console.log({ title: title.innerHTML, img: img.src });
      if (value && selected.length < 2) {
        selected.push({ title: title.innerHTML, img: img.src });
      }
    });
    this.localStorageService.setPairs(selected);
    //this.router.navigate(['/game']);
  }

  delete() {
    const inputs: any = document.querySelectorAll('.check') as unknown;
    inputs.forEach((input: any) => {
      const value = input.checked;
      const title = input.parentNode.querySelector('h2').innerHTML;
      const img = input.parentNode.querySelector('img').src;
      if (value) {
        //selected.push({ title: title.innerHTML, img: img.src });
        //this.localStorageService.deleteImgData(this.localStorageService.imgData.indexOf({title: title.innerHTML, img: img.src}))
        console.log({ title: title, img: img });
        console.log(this.localStorageService.imgData);
        console.log(
          this.localStorageService.imgData.indexOf({ title: title, img: img })
        );
      }
    });
  }
}
