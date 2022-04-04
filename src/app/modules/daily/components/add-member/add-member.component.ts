import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/core/interfaces';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
})
export class AddMemberComponent implements OnInit {
  @Input() members: Member[] = [];
  constructor() {}

  ngOnInit(): void {}

  name = '';

  addMember() {
    console.log(this.name);
    this.members.push(this.newMember(this.name));
    this.name = '';
  }

  newMember(name: String): Member {
    return {
      name,
      timeSpent: 0,
      hasTalked: false,
      isTalking: false,
    };
  }
}
