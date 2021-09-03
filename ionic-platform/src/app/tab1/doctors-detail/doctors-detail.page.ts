import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-doctors-detail',
  templateUrl: './doctors-detail.page.html',
  styleUrls: ['./doctors-detail.page.scss'],
})
export class DoctorsDetailPage implements OnInit, ViewWillEnter {
  firstName;
  lastName;
  expertise;
  contact;
  rating;
  schedule;
  experience;
  description;
  image;
  id;
  show: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.firstName = this.router.getCurrentNavigation().extras.state.firstName;
        this.lastName = this.router.getCurrentNavigation().extras.state.lastName;
        this.expertise = this.router.getCurrentNavigation().extras.state.expertise;
        this.contact = this.router.getCurrentNavigation().extras.state.contact;
        this.rating = this.router.getCurrentNavigation().extras.state.rating;
        this.schedule = this.router.getCurrentNavigation().extras.state.schedule;
        this.experience = this.router.getCurrentNavigation().extras.state.experience;
        this.description = this.router.getCurrentNavigation().extras.state.description;
        this.image = this.router.getCurrentNavigation().extras.state.image;
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
