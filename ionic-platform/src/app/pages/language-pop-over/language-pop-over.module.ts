import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagePopOverPageRoutingModule } from './language-pop-over-routing.module';

import { LanguagePopOverPage } from './language-pop-over.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagePopOverPageRoutingModule
  ],
  declarations: [LanguagePopOverPage]
})
export class LanguagePopOverPageModule {}
