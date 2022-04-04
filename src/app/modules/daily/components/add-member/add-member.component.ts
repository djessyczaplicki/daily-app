import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/core/interfaces';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
})
export class AddMemberComponent implements OnInit {
  @Input() members: Member[] = [];
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  name = '';

  addMember() {
    console.log(this.name);
    this.members.push(this.newMember(this.name));
    this.storageService.setMembers(this.members);

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
