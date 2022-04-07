import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji',
})
export class EmojiPipe implements PipeTransform {
  transform(time: number, timePerMember: number): string {
    if (time < timePerMember * 0.2) {
      return '🤔';
    } else if (time < timePerMember * 0.95) {
      return '😁';
    } else if (time <= timePerMember) {
      return '😨';
    } else if (time <= timePerMember * 1.3) {
      return '😴';
    } else {
      return '😤';
    }
  }
}
