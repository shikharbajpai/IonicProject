import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ToastController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, ViewDidEnter {
  localItem;
  addCartArray = [];
  nullArray = [];
  show: any;
  totalPrice: any;
  discountAmount: any;
  totalAmount: any;
  // productCount = 1;
  constructor(public toastController: ToastController, public cartService: CartService) {

  }

  ngOnInit() {
    this.localItem = localStorage.getItem('CartDetails');
    this.nullArray = JSON.parse(this.localItem);
    if (this.localItem === null || this.nullArray.length === 0) {
      this.show = false;
      localStorage.removeItem('CartDetails');
    } else {
      this.localItem = localStorage.getItem('CartDetails');
      this.addCartArray = JSON.parse(this.localItem);
      this.show = true;
      this.getAmount();
    }
  }

  ionViewDidEnter() {
    this.localItem = localStorage.getItem('CartDetails');
    this.nullArray = JSON.parse(this.localItem);
    if (this.localItem === null || this.nullArray.length === 0) {
      this.show = false;
      localStorage.removeItem('CartDetails');
    } else {
      this.localItem = localStorage.getItem('CartDetails');
      this.addCartArray = JSON.parse(this.localItem);
      this.show = true;
      this.getAmount();
    }

  }

  // decreaseProductCount() {
  //   if (this.productCount > 1) {
  //     this.productCount--;
  //   }
  // }

  // incrementProductCount() {
  //   this.productCount++;
  // }

  getAmount() {
    // console.log(this.addCartArray);
    // console.log(this.addCartArray[1].pricing);
    this.totalPrice = 0;
    this.addCartArray.forEach(value => {
      console.log(value);
      this.totalPrice = this.totalPrice + value.medprice;
      // console.log(this.totalPrice);
    });
    this.discountAmount = 0;
    this.discountAmount = this.totalPrice * 0.2;
    console.log(this.discountAmount);
    this.totalAmount = 0;
    this.totalAmount = this.totalPrice - this.discountAmount;
    console.log(this.totalAmount);
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Medicine removed successfully.',
      duration: 2000,
      color: 'tertiary'
    });
    toast.present();
  };

  onRemove(cart) {
    // window.location.reload();
    for (let i = 0; i < this.addCartArray.length; i++) {
      if (this.addCartArray[i].id === cart.id) {
        this.addCartArray.splice(i, 1);
        // localStorage.CartDetails = JSON.stringify(this.addCartArray);
        localStorage.setItem('CartDetails', JSON.stringify(this.addCartArray));
        this.successToast();
        this.getAmount();
        this.cartService.setItem(this.addCartArray.length);
      }
      if (this.addCartArray.length === 0) {
        localStorage.removeItem(this.localItem);
        // window.location.reload();
        this.show = false;
      }
    }
  }

}
