import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { ConnectionStatus } from '@capacitor/network';
import { Network } from '@capacitor/network';
import { Router } from '@angular/router';
import { PluginListenerHandle } from '@capacitor/core';
import { ConnectionPage } from '../pages/connection/connection.page';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  networkListener: PluginListenerHandle;
  networkStatus: ConnectionStatus;
  loading;
  isnetworkConnected;

  constructor(public router: Router,
    public modalController: ModalController,
    public alertController: AlertController) {

  }

  showStatus(status) {
    console.log(status);
    this.isnetworkConnected = status.connected;
    this.networkStatus = status;
    if (status.connected === false) {
      this.presentLoadingCustom();
      // this.router.navigate(['/connection']);
    } else {

    }
  }
  async presentLoadingCustom() {
    this.loading = await this.modalController.create({
      component: ConnectionPage
    });
    this.loading.present();
  }

  async presentAlertController() {
    this.loading = await this.alertController.create({
      // spinner: 'bubbles',
      cssClass: 'my-custom-class',
      header: 'No Internet Connection',
      message: 'You are offline please check your internet connection',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Check your Internet Connection');
          }
        }
      ]
    });
    this.loading.present();
  }
}

