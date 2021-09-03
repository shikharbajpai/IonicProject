import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './Services/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./front/front.module').then(m => m.FrontPageModule)
  },
  {
    path: 'front',
    loadChildren: () => import('./front/front.module').then(m => m.FrontPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'connection',
    loadChildren: () => import('./pages/connection/connection.module').then(m => m.ConnectionPageModule),
    canDeactivate: [CanDeactivateGuard]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
