import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  imgData: any[] = [];

  imgPairs: any[] = [];

  public addImgData(formData: any) {
    if (!this.isEmptyData()) {
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

  public setPairs(Data: any) {
    localStorage.setItem('pairs', JSON.stringify(Data));
    this.imgPairs = Data;
  }

  public deleteImgData(index: number) {
    this.imgData.splice(index, 1);
    localStorage.setItem('imgData', JSON.stringify(this.imgData));

    if (this.getData().length == 0) {
      localStorage.setItem('imgData', '');
    }
  }

  public isEmptyData() {
    return localStorage.getItem('imgData') ? false : true;
  }

  public isEmptyPairs() {
    return localStorage.getItem('pairs') ? false : true;
  }

  public getData() {
    const string: any = localStorage.getItem('imgData');
    return JSON.parse(string);
  }

  public getPairs() {
    const string: any = localStorage.getItem('pairs');
    return JSON.parse(string);
  }

  public showStorage() {
    //console.log(localStorage.getItem('imgData'));
    console.log(this.getData());
  }
}
