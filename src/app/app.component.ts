import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Clon-de-Hablalo';

  constructor(private swPush: SwPush, private notificationService: NotificationService) {
    this.subscribeToNotifications();
  }

  ngOnInit(): void {

    if (!localStorage.getItem('saturate')) {
      localStorage.setItem('saturate', '100');
    }
    if (!localStorage.getItem('blur')) {
      localStorage.setItem('blur', '0');
    }
    if (!localStorage.getItem('brightness')) {
      localStorage.setItem('brightness', '100');
    }
    if (!localStorage.getItem('contrast')) {
      localStorage.setItem('contrast', '100');
    }
  }

  // Notificaciones Push

  public readonly VAPID_PUBLIC_KEY = 'BH-6yg2vBmRxMIc7fHNk2pICGzFGMCy_Y0NKmX3vLTrI08MqlxIJ5uvNOMpVft8EXXNe-AhEqtO75IiEnelEeQg';

  subscribeToNotifications(): any {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => {
      const token = JSON.parse(JSON.stringify(sub));
      console.log(' **ojo**', token)
      this.notificationService.saveToken(token).subscribe((res: Object) => {
        console.log(res);
      }, (err) => {
        console.log('Error', err)
      })
    }).catch(err => console.error('No se aceptaron las notificacioes', err));
  }


}
