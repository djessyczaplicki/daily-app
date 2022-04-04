import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyRoutingModule } from '../../.history/src/app/modules/daily/daily-routing.module_20220404094107';

const routes: Routes = [
  {
    path: 'daily',
    loadChildren: () =>
      import('./modules/daily/daily.module').then((m) => m.DailyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
