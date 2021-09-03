import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D3chartPage } from './d3chart.page';

const routes: Routes = [
  {
    path: '',
    component: D3chartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D3chartPageRoutingModule {}
