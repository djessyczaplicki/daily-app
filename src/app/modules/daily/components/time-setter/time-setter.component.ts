import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-time-setter',
  templateUrl: './time-setter.component.html',
  styles: [],
})
export class TimeSetterComponent implements OnInit {
  @Input() canStart: boolean = false;
  @Output() onStart: EventEmitter<number> = new EventEmitter();

  constructor(private storageService: StorageService) {}

  time: NgbTimeStruct = {
    hour: 1,
    minute: 10,
    second: 0,
  };

  ngOnInit(): void {}

  start() {
    this.onStart.emit(this.parseTime());
  }

  parseTime() {
    return this.time.hour * 60 + this.time.minute;
  }

  spreadTime() {
    const members = this.storageService.getMembers();
    const seconds = (15 / members.length) * 60;
    this.time.hour = Math.floor(seconds / 60);
    this.time.minute = seconds % 60;
    this.start();
  }
}
