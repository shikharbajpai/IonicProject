import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApexchartPageRoutingModule } from './apexchart-routing.module';

import { ApexchartPage } from './apexchart.page';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApexchartPageRoutingModule,
    NgApexchartsModule,
  ],
  declarations: [ApexchartPage]
})
export class ApexchartPageModule { }
