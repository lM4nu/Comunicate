import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { json } from 'body-parser';
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

    // Verificar si dispositivo/navegador es compatible con ServiceWorker

    if (!this.swUpdate.isEnabled) {
      console.log('Service Worker is not enabled');
    }
    console.log('Service Worker is enabled');
    //Si es compatible llamara al siguiente metodo
    this.handleUpdate();


    // Verificar si dispositivo/navegador es compatible con Web Push Notification

    if (!this.swPush.isEnabled) {
      console.log('Web Push Notification is not enabled');
    }
    console.log('Web Push Notification is enabled');
    //Si es compatible llamara al siguiente metodo
    this.subscribeToNotifications();


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

  // Nueva Version - Actualizar

  handleUpdate() {
    this.swUpdate.versionUpdates.subscribe(evt => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
          break;
      }
    });

  }

  // Notificaciones Push

  public readonly VAPID_PUBLIC_KEY = 'BH-6yg2vBmRxMIc7fHNk2pICGzFGMCy_Y0NKmX3vLTrI08MqlxIJ5uvNOMpVft8EXXNe-AhEqtO75IiEnelEeQg';

  respuesta: any;

  async subscribeToNotifications() {
    try {
      const sub = await this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      });
      this.notificationService.addSubscription(sub);
      console.log('Subscribed');
    } catch (err) {
      console.error('Could not subscribe due to:', err);
    }
    this.swPush.messages.subscribe((message) => {
      console.log(message);
    });
    this.swPush.notificationClicks.subscribe((message) => {
      console.log(message);
    });
    this.swPush.subscription.subscribe((subscription) => {
      console.log(subscription);
    });
  }


  /*
  subscribeToNotifications(): any {
    this.swPush.requestSubscription(
      {
        serverPublicKey: this.VAPID_PUBLIC_KEY
      }
    ).then(respuesta => {
      this.respuesta = respuesta
      //otras pruebas
      const token = JSON.parse(JSON.stringify(respuesta));
      console.log('token: ' + token)
      this.notificationService.saveToken(token).subscribe({
        next: (res: Object) => {
          console.log(res)
        }, error: err => {
          console.log('error', err)
        }
      });
    }).catch(err => {
      this.respuesta = err
    })
  }
  */

}




