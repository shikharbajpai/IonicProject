import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RemediesPage } from './remedies.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RemidiesRoutingModule } from './remedies-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RemidiesRoutingModule,
    TranslateModule
  ],
  declarations: [RemediesPage]
})

export class RemediesModule { }
