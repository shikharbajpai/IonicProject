import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  expertiseData: any = [];
  expertiseSelected = [];
  doctorExpertises = [];
  constructor(private modalController: ModalController, private navParams: NavParams) {
  }

  ngOnInit() {
    console.log(this.navParams);
    console.log(this.navParams.data.experts);
    this.expertiseData = this.navParams.data.experts;
    this.expertiseData.forEach(ele => {
      this.doctorExpertises.push(ele.expertise);
      console.log(this.doctorExpertises);
    });
    this.doctorExpertises = this.doctorExpertises.filter((n, i) => this.doctorExpertises.indexOf(n) === i);
    console.log(this.doctorExpertises);
  }

  async done() {
    // const onClosedData = 'Wrapped Up!';
    console.log(this.expertiseSelected);
    await this.modalController.dismiss(this.expertiseSelected);
  }
}
