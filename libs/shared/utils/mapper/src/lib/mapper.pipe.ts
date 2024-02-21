import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapper',
  standalone: true,
})
export class MapperPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform<T>(fn: (...args: any[]) => T, ...args: any[]): T {
    return fn(...args);
  }
}
