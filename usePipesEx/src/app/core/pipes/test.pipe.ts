import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, count: number, char: string = '!'): any {
    console.log('TestPipe transform invoked.');
    return value + char.repeat(count);
  }

}
