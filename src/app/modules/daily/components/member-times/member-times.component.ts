import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/core/interfaces';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-member-times',
  templateUrl: './member-times.component.html',
  styles: [],
})
export class MemberTimesComponent implements OnInit {
  @Input() members: Member[] = this.storageService.getSessionMembers();
  @Input() timePerMember: number = 60;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}
}
