import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D3chartPageRoutingModule } from './d3chart-routing.module';

import { D3chartPage } from './d3chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D3chartPageRoutingModule
  ],
  declarations: [D3chartPage]
})
export class D3chartPageModule {}
