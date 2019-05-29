import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hub',
    pathMatch: 'full'
  },
  { path: 'training', loadChildren: './training/training.module#TrainingPageModule' },
  { path: 'kalender', loadChildren: './kalender/kalender.module#KalenderPageModule' },
  { path: 'hub', loadChildren: './hub/hub.module#HubPageModule' },
  { path: 'mitglieder', loadChildren: './mitglieder/mitglieder.module#MitgliederPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
