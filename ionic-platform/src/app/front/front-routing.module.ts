import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontPage } from './front.page';

const routes: Routes = [
  {
    path: '',
    component: FrontPage
  },
  {
    path: 'front',
    component: FrontPage
  },
  {
    path: 'tabs',
    loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontPageRoutingModule { }
