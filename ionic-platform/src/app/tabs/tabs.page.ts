import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonTabs, MenuController, ViewDidEnter } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CartService } from '../Services/cart.service';
import { DisabledService } from '../Services/disabled.service';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, ViewDidEnter {
  show: any;
  localItem;
  confirmation;
  confirmArray = [];
  superAdminCheckArray = [];
  localCart;
  cartCheckArray = [];
  badge;
  sequence: any;
  subscription: Subscription;
  profileName;


  constructor(public alertController: AlertController,
    private router: Router,
    public cartService: CartService,
    public profileService: ProfileService,
    public menuController: MenuController,
    public disabledService: DisabledService,
    public translate: TranslateService) {
    // this.subscription = this.profileService.getName().subscribe(name => this.profileName = name.profile);
    this.subscription = this.cartService.getItem().subscribe(item => {
      this.badge = item.count;
      if (this.badge === null || this.badge === 0) {
        this.sequence = false;
      } else {
        this.sequence = true;
      }
    });
  }

  ngOnInit() {
    // this.subscription = this.profileService.getName().subscribe(name => this.profileName = name.profile);
  }
  ionViewDidEnter() {
    // this.subscription = this.profileService.getName().subscribe(name => this.profileName = name.profile);
    this.localItem = localStorage.getItem('UserDetails');
    this.superAdminCheckArray = JSON.parse(this.localItem);
    const check = this.superAdminCheckArray.findIndex(x => x.firstName === 'SuperAdmin');
    if (check > -1) {
      this.show = true;
    } else {
      this.show = false;
    }
    this.badgeNumber();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: this.translate.instant('ALERT.msg'),
      buttons: [
        {
          text: this.translate.instant('BUTTONS.cancel'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Welcome to app');
          }
        }, {
          text: this.translate.instant('BUTTONS.okay'),
          handler: () => {
            this.confirmation = localStorage.getItem('UserDetails');
            localStorage.removeItem('UserDetails');
            localStorage.removeItem('ProfileName');
            this.router.navigate(['/front']);
            this.disabledService.setisLoggedIn(false);

          }
        }
      ]
    });

    await alert.present();
  }

  logout() {
    this.menuController.enable(false, 'main-content');
    this.presentAlertConfirm();
  }

  badgeNumber() {
    this.localCart = localStorage.getItem('CartDetails');
    this.cartCheckArray = JSON.parse(this.localCart);
    this.cartService.setItem(this.cartCheckArray.length);
  }

}
