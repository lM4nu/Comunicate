import { Injectable } from '@angular/core';
import { DATA } from 'src/app/cards-info';

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
    Data.forEach((item: any, index: any) => {
      //console.log(JSON.stringify(item));
      //console.log(index);
      localStorage.setItem(`pair${index}`, JSON.stringify(item));
    });
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
    return localStorage.getItem('pair0') ? false : true;
  }

  public getData() {
    const string: any = localStorage.getItem('imgData');
    return JSON.parse(string);
  }

  public getPairs() {
    const spair0: any = localStorage.getItem('pair0');
    const pair0 = JSON.parse(spair0);
    const spair1: any = localStorage.getItem('pair1');
    const pair1 = JSON.parse(spair1);
    return [pair0, pair1];
  }

  public findIndex(object: object) {
    let re = -1;
    const objectstring = JSON.stringify(object);
    this.imgData.forEach((item, index) => {
      const string = JSON.stringify(item);
      if (objectstring == string) {
        re = index;
      }
    });
    return re;
  }

  public showStorage() {
    //console.log(localStorage.getItem('imgData'));
    console.log(this.getData());
  }
}
