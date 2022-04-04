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

  ngOnInit(): void {
    this.members = this.storageService.getMembers();
  }

  dailyState: DailyState = DailyState.ready;

  stateIsReady(): Boolean {
    return this.dailyState == DailyState.ready;
  }

  start(timePerMember: NgbTimeStruct) {
    this.dailyState = DailyState.started;
  }
}
