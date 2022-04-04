import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyRoutingModule } from './daily-routing.module';
import { DailyComponent } from './pages';
import { TitleComponent } from './components/title/title.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { FormsModule } from '@angular/forms';
import { MemberListComponent } from './components/member-list/member-list.component';
import { TimeSetterComponent } from './components/time-setter/time-setter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberTimesComponent } from './components/member-times/member-times.component';
@NgModule({
  declarations: [
    DailyComponent,
    TitleComponent,
    AddMemberComponent,
    MemberListComponent,
    TimeSetterComponent,
    MemberTimesComponent,
  ],
  imports: [
    CommonModule,
    DailyRoutingModule,
    FormsModule,
    SharedModule,
    NgbTimepickerModule,
  ],
})
export class DailyModule {}
