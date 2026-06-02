import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLabel',
})
export class FormatLabelPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
