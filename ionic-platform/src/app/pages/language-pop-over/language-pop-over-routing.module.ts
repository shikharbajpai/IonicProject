import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguagePopOverPage } from './language-pop-over.page';

const routes: Routes = [
  {
    path: '',
    component: LanguagePopOverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagePopOverPageRoutingModule {}
