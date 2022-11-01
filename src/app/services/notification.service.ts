import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  public url = 'http://localhost:9000';

  saveToken = (token: any) => {
    return this.httpClient.post(`${this.url + '/save'}`,
      {
        token
      });
  };

  // mas pruebas

  addSubscription(sub: PushSubscription) {
    return lastValueFrom(
      this.httpClient.post('http://localhost:3000/api/subscription', { sub })
    );
  }

  notifications(data: string) {
    return lastValueFrom(
      this.httpClient.post('http://localhost:3000/api/notifications', { data })
    );
  }


}
