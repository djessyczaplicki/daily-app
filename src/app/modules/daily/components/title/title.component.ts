import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-title',
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  today: Date = new Date();
}
