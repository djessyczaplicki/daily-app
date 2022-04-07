import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'daily',
    loadChildren: () =>
      import('./modules/daily/daily.module').then((m) => m.DailyModule),
  },
  {
    path: '**',
    redirectTo: 'daily',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
