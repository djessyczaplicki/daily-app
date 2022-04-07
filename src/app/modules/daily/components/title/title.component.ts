import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-title',
  templateUrl: './title.component.html',
  styles: [
    `
      h1 {
        font-family: 'Segoe Print', var(--bs-font-sans-serif);
      }
    `,
  ],
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  today: Date = new Date();
}
