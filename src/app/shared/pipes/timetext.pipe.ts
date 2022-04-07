import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timetext',
})
export class TimetextPipe implements PipeTransform {
  transform(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes > 0 ? minutes + 'minuto(s) y ' : ''}${seconds} segundos`;
  }
}
