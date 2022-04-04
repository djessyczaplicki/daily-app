import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unit } from 'src/app/core/interfaces/unit';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { dailyState } from '../../../../../../.history/src/app/core/interfaces/dailyState_20220404121653';

@Component({
  selector: 'app-time-setter',
  templateUrl: './time-setter.component.html',
  styles: [
    `
      .pickerContainer {
        text-align: center;
        justify-content: center;
      }
    `,
    `
      .pickerCenterer {
        display: inline-block;
        justify-content: center;
        margin: 0 auto;
      }
    `,
  ],
})
export class TimeSetterComponent implements OnInit {
  @Output() onStart: EventEmitter<NgbTimeStruct> = new EventEmitter();

  constructor() {}

  time: NgbTimeStruct = {
    hour: 1,
    minute: 0,
    second: 0,
  };

  ngOnInit(): void {}

  start() {
    this.onStart.emit(this.time);
  }
}
