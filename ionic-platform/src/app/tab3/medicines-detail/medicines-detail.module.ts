import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicinesDetailPageRoutingModule } from './medicines-detail-routing.module';

import { MedicinesDetailPage } from './medicines-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinesDetailPageRoutingModule,
    TranslateModule
  ],
  declarations: [MedicinesDetailPage]
})
export class MedicinesDetailPageModule { }
