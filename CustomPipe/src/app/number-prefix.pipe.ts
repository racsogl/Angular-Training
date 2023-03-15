import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPrefix'
})
export class NumberPrefixPipe implements PipeTransform {

  transform(value: string, country?: string): string {
    let prefix: String = ''
    switch(country) {
        case 'SPAIN':
          prefix = '+34'
          break
        case 'FRANCE':
          prefix = '+34'
          break
    }

    return prefix + value
  }

}
