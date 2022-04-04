import { Injectable } from '@angular/core';
import { Member } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getMembers(): Member[] {
    const membersJson = localStorage.getItem('members');
    return JSON.parse(membersJson ?? '[]');
  }

  setMembers(members: Member[]) {
    const membersJson = JSON.stringify(members);
    localStorage.setItem('members', membersJson);
  }
}
