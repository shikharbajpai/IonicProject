import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from 'src/app/Services/can-deactivate.guard';

import { ConnectionPage } from './connection.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionPageRoutingModule { }
