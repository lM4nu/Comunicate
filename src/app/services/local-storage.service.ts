import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  imgData: any[] = [];

  public addImgData(formData: any) {
    if (!this.isEmpty()) {
      let json = this.getData();
      json.push(formData);
      localStorage.setItem('imgData', JSON.stringify(json));
      this.imgData = json;
    } else {
      const data = [formData];
      localStorage.setItem('imgData', JSON.stringify(data));
      this.imgData = data;
    }
  }

  public delete(index: number) {
    this.imgData.splice(index, 1);
    localStorage.setItem('imgData', JSON.stringify(this.imgData));

    if (this.getData().length == 0) {
      localStorage.setItem('imgData', '');
    }
  }

  public isEmpty() {
    return localStorage.getItem('imgData') ? false : true;
  }

  public getData() {
    const string: any = localStorage.getItem('imgData');
    return JSON.parse(string);
  }

  public showStorage() {
    //console.log(localStorage.getItem('imgData'));
    console.log(this.getData());
  }
}
