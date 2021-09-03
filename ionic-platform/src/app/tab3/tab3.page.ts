import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../Services/cart.service';
import { medicines } from '../shared/medicines';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements ViewDidEnter, ViewWillEnter {
  medicinesArray = [];
  searchMedicines;
  show: any;
  cartArray = [];
  localItem;
  constructor(private router: Router,
    public toastController: ToastController,
    public cartService: CartService,
    public translate: TranslateService) { }

  ionViewDidEnter() {
    this.medicinesArray = medicines;
    this.localItem = localStorage.getItem('CartDetails');
    if (this.localItem === null) {
      this.cartArray = [];
    } else {
      this.cartArray = JSON.parse(this.localItem);
    }
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.show = {
        heading: 'Normal text',
        para1: 'Lorem ipsum dolor sit amet, consectetur',
        para2: 'adipiscing elit.'
      };
    }, 2000);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  };

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Medicine added to cart.',
      duration: 2000,
      color: 'secondary'
    });
    toast.present();
  };

  addtoCart(medicine) {
    // window.location.reload();
    console.log(medicine);
    this.cartArray.push(medicine);
    this.cartService.setItem(this.cartArray.length);
    console.log(this.cartArray);
    localStorage.setItem('CartDetails', JSON.stringify(this.cartArray));
    this.successToast();

  }

  medicineDetail(medicine) {

    const navigationExtras: NavigationExtras = {
      state: {
        medname: medicine.medname,
        meddescription: medicine.meddescription,
        medprice: medicine.medprice,
        medimage: medicine.medimage

      }
    };
    this.router.navigate([`tabs/tab3/medicines-detail/${medicine.id}`], navigationExtras);
  }
}
