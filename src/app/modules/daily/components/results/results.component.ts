import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent implements OnInit {
  @Input() dailyLength: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
