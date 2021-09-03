import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApexchartPage } from './apexchart.page';

const routes: Routes = [
  {
    path: '',
    component: ApexchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApexchartPageRoutingModule {}
