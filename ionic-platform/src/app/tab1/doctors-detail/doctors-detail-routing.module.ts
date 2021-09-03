import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorsDetailPage } from './doctors-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsDetailPageRoutingModule {}
