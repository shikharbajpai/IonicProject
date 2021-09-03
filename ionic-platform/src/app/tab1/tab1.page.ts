import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController, ModalController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { consultants } from '../shared/consultants';
import { FilterPage } from './filter/filter.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, ViewDidEnter, ViewWillEnter {
  searchDoctors = '';
  localItem = '';
  consultant = [];
  doctorsData = [];
  updatedData = [];
  refreshedData = [];
  sortingData = [];
  show: any;

  constructor(private router: Router, public modalController: ModalController, private menuController: MenuController) {
    // this.consultant = consultants;
    // this.doctorsData = this.consultant;   // used in sending to model
    // this.refreshedData = this.consultant;   // used to refresh the data
  }

  ngOnInit() {
    this.localItem = localStorage.getItem('Consultants');
    if (this.localItem === null) {
      this.consultant = consultants;
    } else {
      this.localItem = localStorage.getItem('Consultants');
      this.consultant = JSON.parse(this.localItem);
    }
    this.doctorsData = this.consultant;   // used in sending to model
    this.refreshedData = this.consultant;   // used to refresh the data
  }

  ionViewDidEnter() {
    this.localItem = localStorage.getItem('Consultants');
    if (this.localItem === null) {
      this.consultant = consultants;
    } else {
      this.localItem = localStorage.getItem('Consultants');
      this.consultant = JSON.parse(this.localItem);
    }
    this.doctorsData = this.consultant;   // used in sending to model
    this.refreshedData = this.consultant;   // used to refresh the data

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
    this.consultant = this.refreshedData;

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  };

  // refreshData() {
  //   this.consultant = this.refreshedData;
  //   this.refreshedData = this.consultant.sort((a, b) => a.id - b.id);
  //   console.log(this.refreshedData);
  // }

  openMenu() {
    this.menuController.enable(true, 'main-content');
    this.menuController.open();
  }

  sortData() {
    this.sortingData = this.consultant;  // used to sort the data
    this.sortingData = this.sortingData.sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    console.log(this.sortingData);
    console.log(this.consultant);
  }

  async openFilter() {
    const modal = await this.modalController.create({
      component: FilterPage,
      componentProps: {
        experts: this.doctorsData
      }
    });

    modal.onDidDismiss().then((doctorExpertise) => {
      if (doctorExpertise.data.length !== 0) {
        console.log(doctorExpertise);
        const expertiseList = doctorExpertise.data;
        console.log(expertiseList);
        // this.updatedData = this.consultants.filter((x => x.expertise === expertiseList));
        // this.updatedData = this.consultants.filter(x => expertiseList.filter(y => y !== x.expertise).length === 0);
        this.updatedData = this.doctorsData.filter(x => expertiseList.includes(x.expertise));
        console.log(this.updatedData);
        this.consultant = this.updatedData;
      } else {
        this.consultant = this.doctorsData;
      }
    });

    return await modal.present();
  }

  doctorsDetail(list) {

    const navigationExtras: NavigationExtras = {
      state: {
        firstName: list.firstName,
        lastName: list.lastName,
        expertise: list.expertise,
        contact: list.contact,
        rating: list.rating,
        schedule: list.schedule,
        experience: list.experience,
        description: list.description,
        image: list.image

      }
    };
    this.router.navigate([`tabs/tab1/doctors-detail/${list.id}`], navigationExtras);
  }
}

