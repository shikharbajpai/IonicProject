import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinesDetailPage } from './medicines-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MedicinesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicinesDetailPageRoutingModule {}
