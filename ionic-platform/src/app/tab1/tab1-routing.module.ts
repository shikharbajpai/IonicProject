import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'doctors-detail/:id',
    loadChildren: () => import('./doctors-detail/doctors-detail.module').then(m => m.DoctorsDetailPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then(m => m.FilterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule { }
