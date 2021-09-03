import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorsDetailPageRoutingModule } from './doctors-detail-routing.module';

import { DoctorsDetailPage } from './doctors-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorsDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [DoctorsDetailPage]
})
export class DoctorsDetailPageModule { }
