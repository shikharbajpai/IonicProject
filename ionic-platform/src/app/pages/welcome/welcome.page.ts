import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit, ViewWillEnter {
  isInstalled: any;

  constructor(public menuController: MenuController) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.menuController.enable(false, 'main-content');

  }

  onInstalled() {
    this.isInstalled = true;
    localStorage.setItem('Installed', JSON.stringify(this.isInstalled));
  }

}
