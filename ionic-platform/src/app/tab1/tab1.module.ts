import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../pages/explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    Ng2SearchPipeModule,
    TranslateModule
  ],
  declarations: [Tab1Page],

  providers: []
})
export class Tab1PageModule { }
