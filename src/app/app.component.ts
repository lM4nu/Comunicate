import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Clon-de-Hablalo';

  constructor(
    private swPush: SwPush,
    private swUpdate: SwUpdate,
    private notificationService: NotificationService) {
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

    // Nueva Version - Actualizar



  }



  // Notificaciones Push

  public readonly VAPID_PUBLIC_KEY = 'BH-6yg2vBmRxMIc7fHNk2pICGzFGMCy_Y0NKmX3vLTrI08MqlxIJ5uvNOMpVft8EXXNe-AhEqtO75IiEnelEeQg';
  
  respuesta: any;

  subscribeToNotifications() {
    this.swPush.requestSubscription(
      {
        serverPublicKey: this.VAPID_PUBLIC_KEY
      }
    ).then(respuesta => {
      this.respuesta = respuesta
    })
      .catch(err => {
        this.respuesta = err
      })
  }


}




