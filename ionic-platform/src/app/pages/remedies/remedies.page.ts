import { Component, OnInit } from '@angular/core';
import { cureDetails } from '../../shared/cures';

@Component({
  selector: 'app-remedies',
  templateUrl: 'remedies.page.html',
  styleUrls: ['remedies.page.scss']
})
export class RemediesPage implements OnInit {
  remediesDetails = [];
  show = true;
  constructor() { }

  ngOnInit() {
    this.remediesDetails = cureDetails;
    console.log(this.remediesDetails);
  }
}
