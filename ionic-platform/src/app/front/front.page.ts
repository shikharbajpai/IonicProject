import { Component, OnInit } from '@angular/core';
import { MenuController, ViewWillEnter } from '@ionic/angular';
import { ConnectionPage } from '../pages/connection/connection.page';

@Component({
  selector: 'app-front',
  templateUrl: './front.page.html',
  styleUrls: ['./front.page.scss'],
})
export class FrontPage implements OnInit, ViewWillEnter {
  localItem;
  checkInstalled;
  constructor(public menuController: MenuController) { }

  ngOnInit() {
    this.menuController.enable(false, 'main-content');

  }

  ionViewWillEnter() {
    this.menuController.enable(false, 'main-content');
  }
}
