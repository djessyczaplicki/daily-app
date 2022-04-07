import { Component, OnInit } from '@angular/core';
import { FormControl, MaxLengthValidator, Validators } from '@angular/forms';
import { Member } from 'src/app/core/interfaces';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
})
export class AddMemberComponent implements OnInit {
  members: Member[] = [];
  name = new FormControl('', [Validators.required, Validators.maxLength(20)]);

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.members = this.storageService.getMembers();
  }

  addMember() {
    if (!this.name.valid) return;

    this.members.push(this.newMember(this.name.value));
    this.storageService.setMembers(this.members);

    this.name.setValue('');
    this.name.markAsPristine();
  }

  newMember(name: string): Member {
    return {
      name,
      timeSpent: 0,
      isTalking: false,
    };
  }

  badName(): boolean {
    return this.name.invalid && this.name.dirty;
  }
}
