import { Injectable } from '@angular/core';
import { Member } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  members?: Member[];

  getMembers(): Member[] {
    if (this.members != null) {
      return this.members;
    }
    const membersJson = localStorage.getItem('members');
    this.members = JSON.parse(membersJson ?? '[]');
    return this.members!;
  }

  getSessionMembers(): Member[] {
    const membersJson = sessionStorage.getItem('membersWhoTalked');
    return JSON.parse(membersJson ?? '[]');
  }

  setMembers(members: Member[]) {
    const membersJson = JSON.stringify(members);
    localStorage.setItem('members', membersJson);
  }

  setSessionMembers(members: Member[]) {
    const membersJson = JSON.stringify(members);
    sessionStorage.setItem('membersWhoTalked', membersJson);
  }
}
