import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent {
  @Input() dailyLength: number = 0;
  @Output() onReset: EventEmitter<any> = new EventEmitter();
}
