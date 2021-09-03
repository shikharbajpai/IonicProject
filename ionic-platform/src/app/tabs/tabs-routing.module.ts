import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'remedies',
        loadChildren: () => import('../pages/remedies/remedies.module').then(m => m.RemediesModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../pages/admin/admin.module').then(m => m.AdminPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../pages/cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'chart',
        loadChildren: () => import('../pages/chart/chart.module').then(m => m.ChartPageModule)
      },
      {
        path: 'apexchart',
        loadChildren: () => import('../pages/apexchart/apexchart.module').then(m => m.ApexchartPageModule)
      },
      {
        path: 'd3chart',
        loadChildren: () => import('../pages/d3chart/d3chart.module').then(m => m.D3chartPageModule)
      },
      {
        path: 'language-pop-over',
        loadChildren: () => import('../pages/language-pop-over/language-pop-over.module').then(m => m.LanguagePopOverPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
