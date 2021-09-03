import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, ViewDidEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DisabledService } from './Services/disabled.service';
import { LanguageService } from './Services/language.service';
import { ProfileService } from './Services/profile.service';

import { ConnectionStatus, Network } from '@capacitor/network';
import { ConnectionService } from './Services/connection.service';
import { PluginListenerHandle } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, ViewDidEnter {
  confirmation;
  localItem;
  userName = [];
  profile;
  show = false;
  subscription: Subscription;
  checkInstallation;
  localUser;
  checkUser;
  localProfile;
  checkProfile;
  networkListener: PluginListenerHandle;
  networkStatus: ConnectionStatus;

  constructor(public alertController: AlertController,
    private router: Router,
    public profileService: ProfileService,
    public disabledService: DisabledService,
    public menuController: MenuController,
    public languageService: LanguageService,
    public connectionService: ConnectionService) {

    this.subscription = this.profileService.getName().subscribe(name => this.profile = name.profile);
    if (this.profile === undefined) {
      // this.profile = this.profileService.checkProfileName;
      this.localProfile = localStorage.getItem('ProfileName');
      console.log(this.localProfile);
      this.profile = this.localProfile;
    }
    // this.subscription = this.disabledService.getIsLoggedIn().subscribe(res => this.show = res);
    this.initializeApp();
  }

  ngOnInit() {
    this.subscription = this.disabledService.getIsLoggedIn().subscribe(res => {
      this.show = res.condition;
    });
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      this.connectionService.showStatus(status);
      this.networkStatus = status;
      console.log(status);
    });
    this.localItem = localStorage.getItem('Installed');
    this.checkInstallation = JSON.stringify(this.localItem);
    if (this.localItem === null || this.checkInstallation.length === 0) {
      this.router.navigate(['/welcome']);
    } else {
      this.localUser = localStorage.getItem('UserDetails');
      this.checkUser = JSON.stringify(this.localUser);
      if (this.localUser === null || this.checkUser.length === 0) {
        this.router.navigate(['/front']);
      } else {
        this.router.navigate(['/tabs/tab1']);
        this.disabledService.setisLoggedIn(true);
      }
    }
  }

  ionViewDidEnter() {
    // this.subscription = this.disabledService.getIsLoggedIn().subscribe(res => this.show = res);
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Are you sure you want to logout of the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Welcome to app');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.confirmation = localStorage.getItem('UserDetails');
            localStorage.removeItem('UserDetails');
            localStorage.removeItem('ProfileName');
            this.router.navigate(['/front']);

          }
        }
      ]
    });

    await alert.present();
  }

  logout() {
    this.presentAlertConfirm();
    this.menuController.enable(false, 'main-content');
  }

  initializeApp() {
    this.languageService.setInitialAppLanguage();
  }
}
