import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/core/interfaces';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styles: [],
})
export class MemberListComponent implements OnInit {
  @Input() showDeleteButton: boolean = true;
  constructor(private storageService: StorageService) {}
  members: Member[] = [];

  ngOnInit(): void {
    this.members = this.storageService.getMembers();
  }

  removeMember(member: Member) {
    this.members.splice(this.members.indexOf(member), 1);
    this.storageService.setMembers(this.members);
  }

  shuffle() {
    const members = this.members;
    for (let i = members.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = members[i];
      members[i] = members[j];
      members[j] = temp;
    }
    this.storageService.setMembers(this.members);
  }
}
