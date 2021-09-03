import { Component, OnInit } from '@angular/core';
import { Network } from '@capacitor/network';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    const handler = Network.addListener('networkStatusChange', (status) => {
      if (status.connected === true) {
        this.modalController.dismiss();
      }
    });
  }

  reload() {
    const handler = Network.addListener('networkStatusChange', (status) => {
      if (status.connected === true) {
        this.modalController.dismiss();
      } else {
        console.log(status);
      }
    });
  }
}
