import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyRoutingModule } from './daily-routing.module';
import { DailyComponent } from './pages';
import { TitleComponent } from './components/title/title.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberListComponent } from './components/member-list/member-list.component';
import { TimeSetterComponent } from './components/time-setter/time-setter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberTimesComponent } from './components/member-times/member-times.component';
import { TimerComponent } from './components/timer/timer.component';
import { ResultsComponent } from './components/results/results.component';
@NgModule({
  declarations: [
    DailyComponent,
    TitleComponent,
    AddMemberComponent,
    MemberListComponent,
    TimeSetterComponent,
    MemberTimesComponent,
    TimerComponent,
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    DailyRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class DailyModule {}
