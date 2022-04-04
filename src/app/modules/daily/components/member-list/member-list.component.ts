import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/core/interfaces';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styles: [
    `
      .bold {
        font-weight: bold;
      }
      .cursor-click {
        cursor: pointer;
      }
    `,
  ],
})
export class MemberListComponent implements OnInit {
  @Input() members: Member[] = [];
  constructor() {}

  ngOnInit(): void {}

  removeMember(member: Member) {
    this.members.splice(this.members.indexOf(member), 1);
  }
}
