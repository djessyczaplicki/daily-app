import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'variable',
})
export class VariablePipe implements PipeTransform {
  transform(str: string, variable: string): string {
    return str.replace('%', variable);
  }
}
