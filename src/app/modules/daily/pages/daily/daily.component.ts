import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/core/interfaces';
import { DailyState } from 'src/app/core/interfaces/dailyState';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dailyState: DailyState = DailyState.ready;

  members: Member[] = [
    {
      name: 'Djessy',
      timeSpent: 12,
      hasTalked: false,
      isTalking: false,
    },
    {
      name: 'Santi',
      timeSpent: 0,
      hasTalked: false,
      isTalking: true,
    },
    {
      name: 'Paco',
      timeSpent: 0,
      hasTalked: false,
      isTalking: false,
    },
  ];

  stateIsReady(): Boolean {
    return this.dailyState == DailyState.ready;
  }

}
