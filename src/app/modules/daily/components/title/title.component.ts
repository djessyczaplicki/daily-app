import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-title',
  templateUrl: './title.component.html',
  styles: [
    `
      h1 {
        font-weight: 400;
      }
    `,
  ],
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  today: Date = new Date();
}
