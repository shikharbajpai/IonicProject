import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-medicines-detail',
  templateUrl: './medicines-detail.page.html',
  styleUrls: ['./medicines-detail.page.scss'],
})
export class MedicinesDetailPage implements OnInit, ViewWillEnter {
  id;
  medname;
  meddescription;
  medprice;
  medimage;
  show: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.medname = this.router.getCurrentNavigation().extras.state.medname;
        this.meddescription = this.router.getCurrentNavigation().extras.state.meddescription;
        this.medprice = this.router.getCurrentNavigation().extras.state.medprice;
        this.medimage = this.router.getCurrentNavigation().extras.state.medimage;
      }
    });
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
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
}
