import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Member } from 'src/app/core/interfaces';
import { DailyState } from 'src/app/core/interfaces/dailyState';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  constructor(private storageService: StorageService) {}
  members: Member[] = [];
  membersWhoHaveTalked: Member[] = [];
  totalTime = 0;
  timePerMember = 0;
  dailyLength = 0;

  ngOnInit(): void {
    this.members = this.storageService.getMembers();
  }

  dailyState: DailyState = DailyState.finished;

  stateIsReady(): boolean {
    return this.dailyState == DailyState.ready;
  }

  stateIsStarted(): boolean {
    return this.dailyState == DailyState.started;
  }

  stateIsFinished(): boolean {
    return this.dailyState == DailyState.finished;
  }

  canStart() {
    return this.members.length > 1;
  }

  start(timePerMember: number) {
    this.dailyState = DailyState.started;
    this.timePerMember = timePerMember;
    this.totalTime = 15 * 60;
  }

  onNext(member: Member) {
    this.membersWhoHaveTalked.push(member);
  }

  onFinish(dailyLength: number) {
    this.dailyLength = dailyLength;
    this.dailyState = DailyState.finished;
    this.storageService.setSessionMembers(this.membersWhoHaveTalked);
  }

  onReset() {
    this.dailyState = DailyState.ready;
    this.membersWhoHaveTalked = [];
  }
}
