import { TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyComponent } from './pages/daily/daily.component';

const routes: Routes = [
  {
    path: '',
    component: DailyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TitleCasePipe]
})
export class DailyRoutingModule {}
