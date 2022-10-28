import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient:HttpClient) { }

  public url = "https://comunicate-con-nosotros.herokuapp.com";


  saveToken = (token:any) => {
    return this.httpClient.post('${this.url}/save',
    {
      token
    });
  };

}
