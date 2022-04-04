import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/core/interfaces';

@Component({
  selector: 'app-member-times',
  templateUrl: './member-times.component.html',
  styles: [],
})
export class MemberTimesComponent implements OnInit {
  @Input() members: Member[] = [];

  constructor() {}

  ngOnInit(): void {}
}
