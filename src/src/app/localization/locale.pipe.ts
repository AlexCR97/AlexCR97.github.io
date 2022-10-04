import { Pipe, PipeTransform } from '@angular/core';
import { localizeKey } from './locales';

@Pipe({
  name: 'locale',
})
export class LocalePipe implements PipeTransform {
  constructor() {}

  transform(value: string, ...args: unknown[]): string {
    return localizeKey(value);
  }
}
